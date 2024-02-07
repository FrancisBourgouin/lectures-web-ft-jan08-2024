const client = require("./db");

const selectAllAuthors = () => {
  const query = `
  SELECT
    *
  FROM
    authors
  `;
  return client.query(query).then((res) => res.rows);
};

module.exports = { selectAllAuthors };
