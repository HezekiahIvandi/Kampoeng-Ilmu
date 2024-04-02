const express = require("express");
const router = express.Router();

router.get("/kelas-belajar", (req, res) => {
  res.render("kelas", {
    title: "Kelas Belajar",
    layout: "mainLayout.ejs",
  });
});

module.exports = router;
