const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRoutes = require("./routes/IndexRoutes");
const daftarRoutes = require("./routes/daftarRoutes");
const port = 3000;
app.set("view engine", "ejs");

//static
app.use(express.static("public"));
app.use(expressLayouts);

//route handling
app.use(indexRoutes);
app.use(daftarRoutes);

//Memulai server
app.listen(port, () => {
  console.log(`server is up on port http://localhost:${port}`);
});
