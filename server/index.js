require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const housesCtrl = require("./controller");
// const session = require("express-session");
const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
  })
);
app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/api/houses", housesCtrl.getHouses);
app.post("/api/houses", housesCtrl.addHouses);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`UR SERVER IS UP AND RUNNING ON port ${PORT}`);
});
