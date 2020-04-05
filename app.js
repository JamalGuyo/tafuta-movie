const express = require("express");
const app = express();

// setup
app.set("view engine", "ejs");
app.use(express.static("public"));

const data = {
  Search: [
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
    {
      Title: "The Guard",
      Year: 2001,
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    },
  ],
};

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/results", (req, res) => {
  res.render("resultsPage");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

// listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
