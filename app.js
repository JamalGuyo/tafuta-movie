const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

// setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: REMOVE TEST DATA BELOW. TO
const searchTitle = "WhatToSearch";

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/results", (req, res) => {
  request(
    "http://www.omdbapi.com/?s=iron&apikey=thewdb",
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let data = JSON.parse(body);
        res.render("resultsPage", { data: data.Search, searchTitle });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

// listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
