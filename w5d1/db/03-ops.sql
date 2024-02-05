-- Basic SELECT

-- SELECT * FROM authors;

SELECT
  authors.name,
  authors.description
FROM
  authors
;


-- Single WHERE clause (CONDITION)

SELECT * FROM authors WHERE funny IS FALSE; -- [{row}] or []

SELECT * FROM jokes WHERE LOWER(question) LIKE 'd%';
SELECT * FROM jokes WHERE question ILIKE 'd%';


-- Multiple WHERE clauses

SELECT * FROM jokes WHERE question ILIKE '%?' AND rating > 3;

-- Ordering results

SELECT * FROM jokes WHERE question ILIKE '%?' AND rating > 3 ORDER BY rating; -- default ASC
SELECT * FROM jokes WHERE question ILIKE '%?' AND rating > 3 ORDER BY rating ASC; 
SELECT * FROM jokes WHERE question ILIKE '%?' AND rating > 3 ORDER BY rating, question DESC; 


SELECT * FROM jokes ORDER BY rating LIMIT 1;

-- Joining tables

-- Primary Key Main key of a row in a specific table (INT AUTO-INCREMENT, SERIAL)
-- Foreign Key Key of another row, it may be from another table, or the same table


SELECT * FROM jokes;

-- SELECT * FROM jokes INNER JOIN authors ON authors.id = jokes.author_id;
-- SELECT * FROM jokes RIGHT JOIN authors ON authors.id = jokes.author_id;
-- SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id;
-- SELECT jokes.id, rating FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id;

-- SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id;


SELECT
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes 
LEFT JOIN authors ON authors.id = jokes.author_id;

DROP VIEW IF EXISTS jokes_with_authors;

CREATE VIEW jokes_with_authors AS (
  SELECT
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes 
  LEFT JOIN authors ON authors.id = jokes.author_id
);

SELECT * FROM jokes FULL OUTER JOIN authors ON authors.id = jokes.author_id;

-- jokes LEFT JOIN authors
-- authors RIGHT JOIN jokes


-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT COUNT(id) FROM jokes WHERE rating > 4;


SELECT AVG(rating), author_id FROM jokes GROUP BY author_id;
SELECT AVG(rating), author_id FROM jokes GROUP BY author_id HAVING COUNT(id) > 1;

-- SHOW the jokes of authors having an average of 4 and more in their jokes

-- SELECT author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4.5;

-- Nested selects

-- SELECT * FROM jokes WHERE author_id IN (1,2,3);

-- SELECT * FROM authors WHERE description ILIKE '%student%';


-- SELECT * 
-- FROM jokes 
-- WHERE author_id IN (
--   SELECT id 
--   FROM authors 
--   WHERE description ILIKE '%student%'
-- );


-- SELECT 
--   jokes.*,
--   authors.name,
--   authors.description
-- FROM jokes
-- JOIN authors
-- ON authors.id = jokes.author_id
-- WHERE author_id IN (
--   SELECT author_id 
--   FROM jokes 
--   GROUP BY author_id 
--   HAVING AVG(rating) > 4.5
-- );

SELECT *
FROM jokes_with_authors
WHERE author_id IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4.5
);
-- Views (stretch)
-- Essentially a read-only table
