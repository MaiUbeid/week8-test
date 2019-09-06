BEGIN;

DROP TABLE IF EXISTS city,users cascade;

CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(20) UNIQUE NOT NULL,
  user_password VARCHAR(30)
);

INSERT INTO city (name, country) VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');

INSERT INTO users (email, user_password) VALUES ('mai@gmail.com', '123gaza');

COMMIT;
