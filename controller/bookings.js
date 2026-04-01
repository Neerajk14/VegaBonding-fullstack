const Booking = require("../models/booking");
const Listing = require("../models/listing");
const User = require("../models/user");

 module.exports.createBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, guests, totalPrice, nights } = req.body;

     const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

     if (listing.owner.equals(req.user._id)) {
      req.flash("error", "You cannot book your own listing");
      return res.redirect(`/listings/${id}`);
    }

     const newBooking = new Booking({
      listing: id,
      user: req.user._id,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guests: parseInt(guests),
      totalPrice: parseFloat(totalPrice),
      nights: parseInt(nights),
    });

    await newBooking.save();

     await User.findByIdAndUpdate(req.user._id, {
      $push: { bookings: newBooking._id },
    });

    req.flash("success", "Booking confirmed successfully!");
    if (req.xhr || req.headers.accept?.includes("application/json")) {
      return res.json({ success: true, redirect: "/trips" });
    }
    res.redirect("/trips");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to create booking");
    if (req.xhr || req.headers.accept?.includes("application/json")) {
      return res.status(500).json({ error: "Failed to create booking" });
    }
    res.redirect("back");
  }
};

 module.exports.getTrips = async (req, res) => {
  try {
     await Booking.updateMany(
      { checkOut: { $lt: new Date() }, status: "confirmed" },
      { $set: { status: "completed" } }
    );
    const bookings = await Booking.find({
      user: req.user._id,
      status:"confirmed",
    })
      .populate("listing")
      .sort({ checkIn: -1 });

    res.render("users/trips", { bookings });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};

 module.exports.getPastTrips = async (req, res) => {
  try {
 await Booking.updateMany(
      { checkOut: { $lt: new Date() }, status: "confirmed" },
      { $set: { status: "completed" } }
    );

    const bookings = await Booking.find({
      user: req.user._id,
      status: { $in: ["completed", "cancelled"] },
    })
      .populate("listing")
      .sort({ checkIn: -1 });

    res.render("users/past-trips", { bookings });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};

 module.exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("/trips");
    }

     if (!booking.user.equals(req.user._id)) {
      req.flash("error", "You are not authorized to cancel this booking");
      return res.redirect("/trips");
    }

     const now = new Date();
    const checkIn = new Date(booking.checkIn);
    const hoursUntilCheckIn = (checkIn - now) / (1000 * 60 * 60);

    if (hoursUntilCheckIn < 24) {
      req.flash("error", "Cannot cancel booking within 24 hours of check-in");
      return res.redirect("/trips");
    }

    booking.status = "cancelled";
    booking.cancellationDate = now;
    await booking.save();

    req.flash("success", "Booking cancelled successfully");
    res.redirect("/trips");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/trips");
  }
};

 module.exports.getBookingDetails = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId)
      .populate("listing")
      .populate("user");

    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("/trips");
    }

    res.render("users/booking-details", { booking });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/trips");
  }
};