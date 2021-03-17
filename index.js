const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
// const redditData = require("./data.json");

// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

app.get("/", (req, res) => {
  getData();
  res.render("home");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
