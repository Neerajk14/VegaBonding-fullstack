const User = require("../models/user.js");
 
 module.exports.getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("wishlist");
    res.render("users/wishlist", { wishlist: user.wishlist });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};

 module.exports.addToWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(id)) {
      user.wishlist.push(id);
      await user.save();
      req.flash("success", "Added to wishlist");
    } else {
      req.flash("error", "Already in wishlist");
    }

    res.redirect("back");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};

 module.exports.removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { wishlist: id },
    });

    req.flash("success", "Removed from wishlist");
    res.redirect("back");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};

 module.exports.toggleWishlistAPI = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (user.wishlist.includes(id)) {
      
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { wishlist: id },
      });
      return res.json({
        status: "removed",
        wishlist: user.wishlist.filter((item) => item.toString() !== id),
      });
    } else {
      user.wishlist.push(id);
      await user.save();
      return res.json({ status: "added", wishlist: user.wishlist });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.getWishlistAPI = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ wishlist: user.wishlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};