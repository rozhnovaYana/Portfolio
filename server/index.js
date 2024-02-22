const express = require("express");
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "data");
const port = 3001;

const app = express();

app.get("/", (req, res) => {});

app.get("/api/blogs", (req, res) => {
  const blogPath = path.join(dataPath, "blogs.json");
  const blogs = fs.readFileSync(blogPath, "utf-8");
  res.json({ data: JSON.parse(blogs) });
});
app.get("/api/portfolios", (req, res) => {
  const portfoliosPath = path.join(dataPath, "portfolios.json");
  const portfolios = fs.readFileSync(portfoliosPath, "utf-8");
  res.json({ data: JSON.parse(portfolios) });
});
app.listen(port, () => {
  console.log("Server running");
});
