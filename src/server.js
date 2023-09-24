const express = require("express");
// lay tham so trong client
const bodyParser = require("body-parser");
const cors = require("cors");

const viewEngine = require("./config/viewEngine");
const initWebRouter = require("./route/web");
const connectDB = require("./config/connectDB");

require("dotenv").config();

let app = express();
app.use(cors({ origin: true }));
//config

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
