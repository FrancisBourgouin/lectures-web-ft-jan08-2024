const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jan_jokes",
  password: "francis",
  port: 5432,
});

const outputJokeInfo = (joke) => {
  console.log("*****************************");
  console.log(`Q: ${joke.question}`);
  console.log(`A: ${joke.answer}`);
  console.log(``);
  console.log(`By: ${joke.author_name}`);
  console.log("*****************************\n");
};

const selectOneJoke = (jokeId) => {
  const query = `
  SELECT
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM
    jokes
  LEFT JOIN
    authors
  ON
    authors.id = jokes.author_id
  WHERE
    jokes.id = $1
  `;
  const args = [jokeId];
  return client.query(query, args).then((res) => res.rows[0]);
};

const jokeId = process.argv[2];
console.log(typeof jokeId);

client
  .connect()
  .then(() => selectOneJoke(jokeId))
  .then(outputJokeInfo)
  .catch((err) => console.log(err))
  .finally(() => client.end());
