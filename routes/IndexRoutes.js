const express = require("express");
const router = express.Router();
const { berandaCardsInfo } = require("../views/layouts/cards-info");
router.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
    cardsInfo: berandaCardsInfo,
    isLoggedIn: req.isAuthenticated(),
  });
});

module.exports = router;
