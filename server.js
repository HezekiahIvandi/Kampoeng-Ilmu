const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
app.set("view engine", "ejs");

//static
app.use(express.static("public"));
app.use(expressLayouts);

//route handling
app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Home",
    layout: "mainLayout.ejs",
  });
});

//Memulai server
app.listen(port, () => {
  console.log(`server is up on port http://localhost:${port}`);
});
