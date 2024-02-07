const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jan_jokes",
  password: "francis",
  port: 5432,
});

client.connect();

module.exports = client;
