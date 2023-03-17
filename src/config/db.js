const Pool = require('pg').Pool;
const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.HOST,
	port: process.env.POSTGRES_PORT,
	database: 'node_postgres',
});

module.exports = pool;
