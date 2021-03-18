const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", async (req, res, next) => {
  const data = fs.readFile("generated.json", "utf8", function (err, data) {
    if (err) {
      return next(err);
    }
    const json = JSON.parse(data);
    res.render("table", { json });
  });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
