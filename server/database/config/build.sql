BEGIN;

DROP TABLE IF EXISTS city,users cascade;

CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  user_password VARCHAR(600)
);

INSERT INTO city (name, country) VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');

INSERT INTO users (email, user_password) VALUES ('mai@gmail.com', '$2b$10$0hBTpRAWR6pksD0PFwMmS.RkmIZuxcX0k6eHtvpEFRHd/2tAP/gpa');

COMMIT;
