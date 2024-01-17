// const net = require("net");

// const webServerInstructions = (connection) => {
//   connection.write("<h1>Hello!</h1>");
// };

// const server = net.createServer(webServerInstructions);

// server.listen(8080);

const http = require("node:http");
const fs = require("fs"); // filesystem

// Create a local server to receive data from

// HTTP Status Codes

// 20x => 200 OK | 201 created (Everybody is happy)
// 30x => Redirections 301 | 302 (permanent, non-permanent)
// 40x => 404 not found | 403 not authorized (YOU FUDGED UP)
// 50x => 500 interval server error (SERVER FUDGED UP)

const server = http.createServer((req, res) => {
  // switch (req.url) {
  //   case "/bob":
  //     // ...
  //     break;
  //   case "/potato":
  //     // ...
  //     break;
  //   default:
  //     // ...
  //     break;
  // }

  if (req.url === "/bob") {
    return fs.readFile("./bob.html", (err, data) => {
      if (err) {
        return err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  }

  if (req.url === "/potato") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Potato!</h1>");
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  return res.end("<h1>NOT FOUND</h1>");
});

server.listen(8000);
