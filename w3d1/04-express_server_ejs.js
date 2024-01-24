// Basic express server w/ EJS

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

server.get("/", (req, res) => {
  // Export a video : Rendering...
  // Render the game at 60fps, 500fps
  // 3d modeling => Blender project, render it to a video

  const templateVars = { time: new Date().toLocaleTimeString() };
  res.render("index", templateVars);
});

// Server, on the event of a GET request for /users, give the user info as the response
server.get("/users", (req, res) => {
  const templateVars = { users };
  res.render("users", templateVars);
});

server.get("/users/:user_id", (req, res) => {
  // const { user_id } = req.params;
  const userId = req.params.user_id;
  const currentUser = users[userId];

  console.log(req.params);

  if (!currentUser) {
    return res.send("NO USER HERE WITH THAT ID...");
  }

  const templateVars = {
    name: currentUser.name,
    isAdmin: currentUser.isAdmin,
    email: currentUser.email,
  };
  return res.render("user", templateVars);
});

server.listen(3000);
