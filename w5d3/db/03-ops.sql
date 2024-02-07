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