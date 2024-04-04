const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");

router.get("/user/dashboard", (req, res) => {
  res.send("login succesfull!");
});

router.get("/login", (req, res) => {
  res.send("Silahkan Login");
});

router.post(
  "/login/submit",
  passport.authenticate("local", {
    successRedirect: "/user/dashboard",
    failureRedirect: "/login",
  })
);

router.post("/daftar/submit", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin user
    const newUser = new User({
      email,
      password: hashedPassword, // Store the hashed password in the database
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).send("Admin account created successfully");
  } catch (error) {
    console.error("Error creating admin account:", error);
    res.status(500).send("Error creating admin account");
  }
});

router.get("/daftar", (req, res) => {
  res.render("daftar.ejs", {
    title: "Daftar",
    layout: "mainLayout.ejs",
  });
});
module.exports = router;
