const express = require("express");
// lay tham so trong client
const bodyParser = require("body-parser");
// const cors = require("cors");

const viewEngine = require("./config/viewEngine");
const initWebRouter = require("./route/web");
const connectDB = require("./config/connectDB");

require("dotenv").config();

let app = express();
// app.use(cors({ origin: true }));
//config

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);
connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  // call back
  console.log("successfully with nodeJS on the port: " + port);
});
