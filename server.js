const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const indexRoutes = require("./routes/IndexRoutes");
const daftarRoutes = require("./routes/daftarRoutes");
const kelasRoutes = require("./routes/kelasRoutes");
const alurRoutes = require("./routes/alurRoutes");
const tentangRoutes = require("./routes/tentangRoutes");
const port = 3000;
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/KampoengIlmu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./passport-config");
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
