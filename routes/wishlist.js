const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listing =require("../models/listing.js")
const { isLoggedIn } = require("../middleware.js");
const wishlistController = require("../controller/wishlists.js");

router.get("/wishlist", isLoggedIn, wrapAsync(wishlistController.getWishlist));

router.post(
  "/wishlist/add/:id",
  isLoggedIn,
  wrapAsync(wishlistController.addToWishlist),
);

router.delete(
  "/wishlist/remove/:id",
  isLoggedIn,
  wrapAsync(wishlistController.removeFromWishlist),
);

router.post(
  "/api/wishlist/toggle/:id",
  isLoggedIn,
  wrapAsync(wishlistController.toggleWishlistAPI),
);
router.get(
  "/api/wishlist",
  isLoggedIn,
  wrapAsync(wishlistController.getWishlistAPI),
);

module.exports = router;
