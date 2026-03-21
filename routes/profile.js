const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isReviewAuthor } = require("../middleware");
const profileController = require("../controller/profile");
const Review = require("../models/review");
const Listing = require("../models/listing");

router.get("/profile", isLoggedIn, wrapAsync(profileController.showProfile));

router.delete(
  "/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) {
      req.flash("error", "Review not found");
      return res.redirect("/profile");
    }
    await Review.findByIdAndDelete(reviewId);

    await Listing.findByIdAndUpdate(review.listing, {
      $pull: { reviews: reviewId },
    });

    req.flash("success", "Review deleted successfully!");
    res.redirect("/profile");
  }),
);

module.exports = router;
