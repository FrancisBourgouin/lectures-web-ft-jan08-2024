// Basic express server wo/ EJS

const express = require("express");

const server = express();

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

// Server, on the event of a GET request for /users, give the user info as the response

server.get("/users", (req, res) => {
  res.json(users);
});

server.get("/users/:user_id", (req, res) => {
  // const { user_id } = req.params;
  const userId = req.params.user_id;
  const currentUser = users[userId];

  console.log(req.params);

  if (!currentUser) {
    return res.send("NO USER HERE WITH THAT ID...");
  }

  return res.json(currentUser);
});

server.listen(3000);
