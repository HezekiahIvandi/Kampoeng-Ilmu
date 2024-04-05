const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login.ejs", {
    title: "Login",
    layout: "mainLayout.ejs",

    isLoggedIn: req.isAuthenticated(),
  });
});

module.exports = router;
