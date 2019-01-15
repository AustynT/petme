const express = require("express"); // adds express library to the file
const app = express(); // calling express like a function it generates a new application

app.get("/", (req, res) => {
  res.send({ home: "page" });
});

const PORT = process.env.PORT || 5000;

app.listen(5000);
