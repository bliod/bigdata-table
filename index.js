const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const { nextTick } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", async (req, res, next) => {
  const data = fs.readFile("generated.json", "utf8", function (err, data) {
    if (err) {
      return next(err);
    }
    const json = JSON.parse(data);
    // json.map((el) => console.log("element"));
    // console.log(JSON.parse(data));

    res.render("home", { json });
  });
  //   console.log(data);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
