// Basic express server wo/ EJS

const express = require("express");

const server = express();

server.set("view engine", "ejs");

const user1 = {
  id: 1,
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  id: 2,
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  1: user1,
  2: user2,
};

// req, res, next

server.use((req, res, next) => {
  console.log("Client tried to access", req.url, req.params);
  next();

  // res.send("INTERCEPTION!");
});

server.get("/", (req, res) => {
  const templateVars = { time: new Date().toLocaleTimeString() };
  res.render("index", templateVars);
});

// Server, on the event of a GET request for /users, give the user info as the response
server.get("/users", (req, res) => {
  res.json(users);
});

server.get("/users/:user_id", (req, res) => {
  res.json(users[req.params.user_id]);
});

server.use((req, res, next) => {
  res.send("INTERCEPTION! 404 NOT FOUND");
});

server.listen(3000);
