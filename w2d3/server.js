const net = require("net");

// SERVER => WAITER => Provider
// CLIENT => Receiver

// HoF - Callback

const connectionList = [];

const connectionManagementManual = (connection) => {
  connection.setEncoding("utf8");

  const parrotBack = (data) => connection.write(`🦜: ${data}`);

  // const broadcast = (data) => connectionList.forEach((c) => c.write(`📢: ${data}`));

  const broadcast = (data) => {
    console.log(data);

    for (const remoteConn of connectionList) {
      if (remoteConn !== connection) {
        remoteConn.write(`📢: ${data}`);
      }
    }
  };

  connectionList.push(connection);

  console.log("Oh we have a client! Total amount of clients is:", connectionList.length);

  connection.write("Hi client! \n");

  connection.on("data", broadcast);
};

const server = net.createServer(connectionManagementManual);

server.listen(9001);

// eqArrays
// [1,2] === [1,2]
// struct    struct

// connection struct? obj
