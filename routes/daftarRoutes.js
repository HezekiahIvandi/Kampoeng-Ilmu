const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");
router.post(
  "/login/submit",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.post("/daftar/submit", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(email + password);
    // Check if the username is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).json({ msg: "Email already exists" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin user
    const newUser = new User({
      email,
      password: hashedPassword, // Store the hashed password in the database
    });

    // Save the new user to the database
    await newUser.save().then(() => {
      res.status(201).json({ msg: "Success" });
    });
    //res.redirect("/login");
  } catch (error) {
    console.error("Error creating admin account:", error);
    res.status(500).json({ msg: "Error creating admin account" });
  }
});

router.get("/daftar", (req, res) => {
  res.render("daftar.ejs", {
    title: "Daftar",
    layout: "mainLayout.ejs",

    isLoggedIn: req.isAuthenticated(),
  });
});
module.exports = router;
