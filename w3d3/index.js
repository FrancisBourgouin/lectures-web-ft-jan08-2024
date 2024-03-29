const express = require("express");
const cookieParser = require("cookie-parser");

const thieves = require("./data/thiefData");
const generateThiefHelpers = require("./helpers/thiefHelpers");

const { fetchUserByEmail, authenticateUser, createUser } = generateThiefHelpers(thieves);

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.set("view engine", "ejs");

// Cookies? Store userId / userEmail (id), read cookie
// HTTP ?
app.get("/", (req, res) => {
  console.log(req.cookies);
  const { userEmail } = req.cookies;

  const { user } = fetchUserByEmail(userEmail);

  const templateVars = { user };

  return res.render("index", templateVars);
});

// When the form in / submits, then redirect "/"
// If succesful, set cookie
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { user, error } = authenticateUser(email, password);

  if (user) {
    res.cookie("userEmail", user.email);
  }

  if (error) {
    console.log("Error msg", error);
  }

  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("userEmail");

  return res.redirect("/");
});

app.get("/register", (req, res) => {
  const { userEmail } = req.cookies;

  const { user } = fetchUserByEmail(userEmail);

  if (user) {
    return res.redirect("/");
  }

  return res.render("register");
});

app.post("/register", (req, res) => {
  const { user, error } = createUser(req.body);

  if (error) {
    console.log(error);

    return res.redirect("/register");
  }
  console.log(thieves);
  console.log(user);
  res.cookie("userEmail", user.email);

  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
