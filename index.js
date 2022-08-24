const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
