const db = require('../config/db');

const getFilms = async (req, res) => {
	let films;
	if (req.params.id) {
		films = await db.query('SELECT * FROM film WHERE id = $1', [req.params.id]);
	} else {
		films = await db.query('SELECT * FROM film');
	}
	res.send(films.rows);
};

const createFilm = async (req, res) => {
	const { name, year } = req.body;
	const newFilm = await db.query(
		'INSERT INTO film (name, release_year) VALUES ($1, $2) RETURNING *',
		[name, year]
	);
	res.send(newFilm.rows[0]);
};

const updateFilm = async (req, res) => {
	const id = req.params.id;
	if (id == null || id == '') {
		res.send({ message: 'You must provide "id" in order to update film' });
		return;
	}

	const { name, year } = req.body;
	const updatedFilm = await db.query(
		'UPDATE film SET name = $1, release_year=$2 WHERE id = $3 RETURNING *',
		[name, year, id]
	);
	res.send(updatedFilm.rows[0]);
};

const deleteFilm = async (req, res) => {
	const id = req.params.id;
	if (id == null || id == '') {
		res.send({ message: 'You must provide "id" in order to delete film' });
		return;
	}

	const deletedFilm = await db.query('DELETE FROM film WHERE id = $1', [id]);
	res.send({message: `film with id = ${id} was deleted`});
};

module.exports = {
	createFilm,
	getFilms,
	updateFilm,
	deleteFilm,
};
