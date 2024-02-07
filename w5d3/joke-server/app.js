const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { selectAllJokes, selectOneJoke, insertJoke } = require("./helpers/jokeHelpers");
const { selectAllAuthors } = require("./helpers/authorHelpers");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Don't jump between steps!
// View gets the data from the route (templateVars)
// Route will fetch data to populate templateVars (ideally helper)
// Helper interacts with DB

app.get("/", (req, res) => {
  res.json("hello!");
}); // Home

app.get("/jokes", (req, res) => {
  selectAllJokes()
    .then((jokes) => {
      const templateVars = { jokes };
      res.render("jokes", templateVars);
    })
    .catch((err) => {
      res.json(err);
    });
}); // All the jokes

app.get("/jokes/new", (req, res) => {
  selectAllAuthors()
    .then((authors) => {
      const templateVars = { authors };
      res.render("new-joke", templateVars);
    })
    .catch((err) => {
      res.json(err);
    });
}); // All the jokes

app.post("/jokes", (req, res) => {
  insertJoke(req.body)
    .then((joke) => {
      res.redirect(`/jokes/${joke.id}`);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id;

  selectOneJoke(jokeId)
    .then((joke) => {
      const templateVars = { joke };
      res.render("joke", templateVars);
    })
    .catch((err) => res.json(err));
}); // Specific joke

app.get("/api/jokes", (req, res) => {
  selectAllJokes()
    .then((jokes) => {
      res.json(jokes);
    })
    .catch((err) => {
      res.json(err);
    });
}); // All the jokes

app.get("/api/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id;

  selectOneJoke(jokeId)
    .then((joke) => {
      res.json(joke);
    })
    .catch((err) => res.json(err));
}); // Specific joke

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
