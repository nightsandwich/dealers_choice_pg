
DROP TABLE IF EXISTS players, mixedDoubles, openSingles, openDoubles;

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  birthYear INTEGER NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE mixedDoubles (
  id SERIAL PRIMARY KEY,
  playerId INTEGER REFERENCES players(id) NOT NULL,
  points INTEGER NOT NULL
);

CREATE TABLE openSingles (
  id SERIAL PRIMARY KEY,
  playerId INTEGER REFERENCES players(id) NOT NULL,
  points INTEGER NOT NULL
);

CREATE TABLE openDoubles (
  id SERIAL PRIMARY KEY,
  playerId INTEGER REFERENCES players(id) NOT NULL,
  points INTEGER NOT NULL
);

INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Thomas', 'Haas', 1996, 'Germany');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Matthias', 'Schoepf', 1992, 'Austria');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Yannick', 'Correia', 1988, 'Luxembourg');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Benjamin', 'Willfort', 1990, 'Austria');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Olivier', 'Covos', 1976, 'France');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Jakob', 'Heinreichsberger', 1984, 'Austria');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Leon', 'Kogelnik', 1980, 'Slovenia');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Miguel', 'Dos Santos Lote', 1990, 'France');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Raphael', 'Hampel', 1999, 'Germany');
INSERT INTO players (firstName, lastName, birthYear, country) VALUES ('Maxime', 'Blin', 1988, 'France');

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Thomas' AND lastName = 'Haas'), 132);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Thomas' AND lastName = 'Haas'), 256);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Thomas' AND lastName = 'Haas'), 218);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Matthias' AND lastName = 'Schoepf'), 150);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Matthias' AND lastName = 'Schoepf'), 208);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Matthias' AND lastName = 'Schoepf'), 132);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Yannick' AND lastName = 'Correia'), 150);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Yannick' AND lastName = 'Correia'), 204);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Yannick' AND lastName = 'Correia'), 270);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Benjamin' AND lastName = 'Willfort'), 180);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Benjamin' AND lastName = 'Willfort'), 204);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Benjamin' AND lastName = 'Willfort'), 192);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Olivier' AND lastName = 'Covos'), 0);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Olivier' AND lastName = 'Covos'), 150);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Olivier' AND lastName = 'Covos'), 24);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Jakob' AND lastName = 'Heinreichsberger'), 50);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Jakob' AND lastName = 'Heinreichsberger'), 144);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Jakob' AND lastName = 'Heinreichsberger'), 108);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Leon' AND lastName = 'Kogelnik'), 110);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Leon' AND lastName = 'Kogelnik'), 141);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Leon' AND lastName = 'Kogelnik'), 176);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Miguel' AND lastName = 'Dos Santos Lote'), 110);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Miguel' AND lastName = 'Dos Santos Lote'), 132);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Miguel' AND lastName = 'Dos Santos Lote'), 114);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Raphael' AND lastName = 'Hampel'), 0);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Raphael' AND lastName = 'Hampel'), 150);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Raphael' AND lastName = 'Hampel'), 24);

INSERT INTO mixedDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Maxime' AND lastName = 'Blin'), 70);
INSERT INTO openSingles (playerId, points) VALUES ((SELECT id from players where firstName='Maxime' AND lastName = 'Blin'), 132);
INSERT INTO openDoubles (playerId, points) VALUES ((SELECT id from players where firstName='Maxime' AND lastName = 'Blin'), 78);


