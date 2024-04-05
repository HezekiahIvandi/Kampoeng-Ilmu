const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
mongoose.connect("mongodb://localhost:27017/KampoengIlmu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(passport.initialize());
app.use(passport.session());

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
