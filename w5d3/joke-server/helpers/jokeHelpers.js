const client = require("./db");

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

const insertJoke = (jokeInfo) => {
  const query = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING
    *
  `;
  const args = [jokeInfo.question, jokeInfo.answer, jokeInfo.rating, jokeInfo.author_id];
  return client.query(query, args).then((res) => res.rows[0]);
};

module.exports = { selectAllJokes, selectOneJoke, insertJoke };
