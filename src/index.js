// -- Modules -- //
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// -- Routes Module -- //
const routes = require("./apis/routes");

// -- Config -- //
const port = process.env.PORT || 3000;
const app = express();

// -- Middlewares -- //
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger("short"));

// -- Database -- //
require("./database");

// -- Routes -- //
app.use(routes);

// -- Init -- //
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
