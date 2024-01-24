// Net package vs HTTP package

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

  // Fax machines => Cover letter (header) - content (END)

  res.writeHead(200, { "Content-Type": "application/json" });

  // /users/1
  // /users/2
  res.end(JSON.stringify(users));
});

server.listen(4200);

server.on("listening", () => {
  console.log(
    "Server started to listen on port 4200 at ",
    new Date().toLocaleTimeString()
  );
});
