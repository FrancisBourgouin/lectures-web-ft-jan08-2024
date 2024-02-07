// import pg from "pg"
const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jan_jokes",
  password: "francis",
  port: 5432,
});

const name = "Pequeno Pollo";
const isFunny = true;

const outputAllAuthors = (authors) => authors.forEach(outputAuthorInfo);

const outputAuthorInfo = (author) => {
  console.log("***");
  console.log(`Name: ${author.name}, they are ${author.funny ? "funny" : "not funny"}`);
  console.log("***\n");
};

// outputAuthorInfo({ name, funny: isFunny });

const selectAllAuthors = () => {
  return client.query("SELECT * FROM authors").then((res) => res.rows);
};

client
  .connect()
  .then(selectAllAuthors)
  .then(outputAllAuthors)
  .catch((error) => console.log(error))
  .finally(() => client.end());
