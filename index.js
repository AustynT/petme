const express = require("express"); // adds express library to the file

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const router = require("./router");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/petme_database");

const app = express(); // calling express like a function it generates a new application

router(app);
const PORT = process.env.PORT || 5000;

app.listen(5000);
