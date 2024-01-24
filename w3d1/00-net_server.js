const net = require("net"); // Require (or import) the "net" package from Node

// Server handler will handle new connections to our server!
const serverHandler = (connection) => {
  console.log("We have a new client (or connection)");

  connection.setEncoding("utf-8");

  connection.on("data", (data) => {
    console.log(data);
  });
};

const server = net.createServer(serverHandler);

server.listen(3000); // Activate the server to listen on port 3000 for connections
