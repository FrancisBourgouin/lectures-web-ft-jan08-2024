const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { getAllUsers, getUserById } = require("./helpers/userHelpers");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/users", (req, res) => {
  const result = getAllUsers();
  res.json(result);
});
app.get("/api/users/:user_id", (req, res) => {
  const result = getUserById(req.params.user_id);
  res.json(result);
});

module.exports = app;
