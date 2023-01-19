const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

// connection with database
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'loginregister',
});

app.get('/', (req, res) => {
	res.json('This is the backend register');
});

// register
app.post('/register', (req, res) => {
	const q =
		'INSERT INTO users (`name`, `email`, `password`) VALUES (?)';
	const values = [req.body.name, req.body.email, req.body.password];
	db.query(q, [values], (err, result) => {
		if (err) return res.json(err);
		return res.json(result);
	});
});

app.listen(8800, () => {
	console.log('SERVER WORKING');
});
