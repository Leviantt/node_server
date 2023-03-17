CREATE TABLE film
(
  id SERIAL PRIMARY KEY,
  name TEXT,
  release_year INTEGER
);

CREATE TABLE genre
(
  id SERIAL PRIMARY KEY,
  name TEXT,
  film_id INTEGER REFERENCES film(id)
);

CREATE TABLE film_genre
(
  id SERIAL PRIMARY KEY,
  film_id INTEGER REFERENCES film(id) ON DELETE CASCADE,
  genre_id INTEGER REFERENCES genre(id) ON DELETE CASCADE
);