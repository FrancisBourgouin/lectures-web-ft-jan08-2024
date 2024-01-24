// HTTP Server w/ Routing

const http = require("http");

const user1 = {
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  "pock@pock.com": user1,
  "gentleman@cambrioleur.com": user2,
};

const server = http.createServer((req, res) => {
  // req => Request
  // res => Response
  console.log(req.headers);
  // Fax machines => Cover letter (header) - content (END)

  res.writeHead(200, { "Content-Type": "application/json" });

  // /users/1

  if (req.url === "/users/1") {
    return res.end(JSON.stringify(users["pock@pock.com"]));
  }
  // /users/2
  if (req.url === "/users/2") {
    return res.end(JSON.stringify(users["gentleman@cambrioleur.com"]));
  }

  return res.end(JSON.stringify(users));
});

server.listen(4200);

server.on("listening", () => {
  console.log(
    "Server started to listen on port 4200 at ",
    new Date().toLocaleTimeString()
  );
});
