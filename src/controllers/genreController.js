const db = require('../config/db');

const getGenres = async (req, res) => {
	let genres;
	if (req.params.id) {
		genres = await db.query('SELECT * FROM genre WHERE id = $1', [req.params.id]);
	} else {
		genres = await db.query('SELECT * FROM genre');
	}
	res.send(genres.rows);
};

const createGenre = async (req, res) => {
	const { name, film_id } = req.body;
	try {
		const newFilm = await db.query(
			'INSERT INTO genre (name, film_id) VALUES ($1, $2) RETURNING *',
			[name, film_id]
		);
		res.send(newFilm.rows[0]);
	} catch (e) {
		console.log(e);
		req.send({ message: 'There is no film with such "id"' });
	}
};

const updateGenre = async (req, res) => {
	const id = req.params.id;
	if (id == null || id == '') {
		res.send({ message: 'You must provide "id" in order to update genre' });
		return;
	}

	const { name, film_id } = req.body;
	const updatedGenre = await db.query(
		'UPDATE genre SET name = $1, film_id=$2 WHERE id = $3 RETURNING *',
		[name, film_id, id]
	);
	res.send(updatedGenre.rows[0]);
};

const deleteGenre = async (req, res) => {
	const id = req.params.id;
	if (id == null || id == '') {
		res.send({ message: 'You must provide "id" in order to delete genre' });
		return;
	}

	const deletedGenre = await db.query('DELETE FROM film WHERE id = $1', [id]);
	res.send({message: `genre with id = ${id} was deleted`});
};

module.exports = {
	createGenre,
	getGenres,
	updateGenre,
	deleteGenre,
};
