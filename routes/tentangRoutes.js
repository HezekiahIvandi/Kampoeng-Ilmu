const express = require("express");
const router = express.Router();

router.get("/tentang-kami", (req, res) => {
  res.render("tentang.ejs", {
    title: "Tentang-Kami",
    layout: "mainLayout.ejs",
  });
});

module.exports = router;
