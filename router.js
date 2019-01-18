const passportService = require("./services/passport");
const passport = require("passport");
const ejs = require("ejs");
var templateString = null;
var fs = require("fs");
var templateString = fs.readFileSync("./views/docs.ejs", "utf-8");
// const fs = require('fs');

module.exports = app => {
  app.get("/", function(req, res) {
    res.send(ejs.render(templateString));
  });

  app.get("/greeting", (req, res) => {
    res.send({ Hello: "world" });
  });
};
