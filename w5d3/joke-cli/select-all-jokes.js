const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jan_jokes",
  password: "francis",
  port: 5432,
});

const outputAllJokes = (jokes) => jokes.forEach(outputJokeInfo);

const outputJokeInfo = (joke) => {
  console.log("*****************************");
  console.log(`Q: ${joke.question}`);
  console.log(`A: ${joke.answer}`);
  console.log(``);
  console.log(`By: ${joke.author_name}`);
  console.log("*****************************\n");
};

const selectAllJokes = () => {
  const query = `
  SELECT
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM
    jokes
  JOIN
    authors
  ON
    authors.id = jokes.author_id;
  `;
  return client.query(query).then((res) => res.rows);
};

client
  .connect()
  .then(selectAllJokes)
  .then(outputAllJokes)
  .catch((err) => console.log(err))
  .finally(() => client.end());
