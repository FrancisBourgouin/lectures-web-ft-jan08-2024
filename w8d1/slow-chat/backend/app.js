const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

const messages = require("./data/messageData");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/messages", (req, res) => {
  const { start_at } = req.query;

  if (start_at) {
    const filteredMessages = messages.filter((message) => message.id >= start_at);

    return res.json(filteredMessages);
  }

  setTimeout(() => {
    return res.json(messages);
  }, 1000);
});

app.post("/api/messages", (req, res) => {
  const { content, type, userId } = req.body;

  const newMessage = {
    content,
    type,
    userId,
    id: messages.length + 1,
    datePosted: new Date().toISOString(),
  };

  messages.push(newMessage);

  return res.json(newMessage);
});

app.get("/api/users", (req, res) => {
  //
});
app.get("/api/users/:user_id", (req, res) => {
  //
});

module.exports = app;
