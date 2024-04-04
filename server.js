const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRoutes = require("./routes/IndexRoutes");
const daftarRoutes = require("./routes/daftarRoutes");
const kelasRoutes = require("./routes/kelasRoutes");
const alurRoutes = require("./routes/alurRoutes");
const tentangRoutes = require("./routes/tentangRoutes");
const port = 3000;
app.set("view engine", "ejs");

//static
app.use(express.static("public"));
app.use(expressLayouts);

//route handling
app.use(indexRoutes);
app.use(daftarRoutes);
app.use(kelasRoutes);
app.use(alurRoutes);
app.use(tentangRoutes);

//Memulai server
app.listen(port, () => {
  console.log(`server is up on port http://localhost:${port}`);
});
