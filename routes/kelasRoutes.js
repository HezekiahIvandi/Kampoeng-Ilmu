const express = require("express");
const router = express.Router();
const { ruangKelasCardsInfo } = require("../views/layouts/cards-info");

router.get("/kelas-belajar", (req, res) => {
  res.render("kelas", {
    title: "Kelas Belajar",
    layout: "mainLayout.ejs",
    cardsInfo: ruangKelasCardsInfo,
  });
});

module.exports = router;
