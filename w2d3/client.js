const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ port: 9001 }, () => {
  console.log("Connected succesfully!");

  client.write("Hello!");
});

client.setEncoding("utf8");

client.on("data", (data) => console.log(data));

rl.on("line", (line) => {
  client.write(line);
});
// setInterval(() => {
//   client.write("ALL YOUR BASE ARE BELONG TO US");
// }, 1000);
