const express = require("express");
const router = express.Router();

router.get("/alur-belajar", (req, res) => {
  res.render("alur.ejs", {
    title: "Alur-Belajar",
    layout: "mainLayout.ejs",

    isLoggedIn: req.isAuthenticated(),
  });
});

module.exports = router;
