const express = require("express");
const router = express.Router();

router.get("/daftar", (req, res) => {
  res.render("daftar.ejs", {
    title: "Daftar",
    layout: "mainLayout.ejs",
  });
});

module.exports = router;
