const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware.js");
const passport = require("passport");
const userController =require("../controller/users")

router.get("/signup", userController.renderSignupForm);

router.post(
  "/signup",
  wrapAsync(userController.signup),
);

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
userController.login
);

router.get("/logout", userController.logout);

module.exports = router;
