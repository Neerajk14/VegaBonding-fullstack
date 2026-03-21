const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

const bookingController = require("../controller/bookings");

router.get("/trips", isLoggedIn, wrapAsync(bookingController.getTrips));

router.get(
  "/trips/past",
  isLoggedIn,
  wrapAsync(bookingController.getPastTrips),
);

router.post(
  "/listings/:id/bookings",
  isLoggedIn,
  wrapAsync(bookingController.createBooking),
);

router.post(
  "/bookings/:bookingId/cancel",
  isLoggedIn,
  wrapAsync(bookingController.cancelBooking),
);

router.get(
  "/bookings/:bookingId",
  isLoggedIn,
  wrapAsync(bookingController.getBookingDetails),
);

module.exports = router;
