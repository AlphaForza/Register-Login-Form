const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000'],
		methods: ['GET', 'POST'],
		credentials: true,
	})
);
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		key: 'userId',
		secret: 'subscribe',
		resave: false,
		saveUninitialized: false,
		cookie: { expires: 60 * 60 * 24 },
	})
);

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

// login
app.post('/login', (req, res) => {
	const name = req.body.name;
	const password = req.body.password;

	const q = 'SELECT * FROM users WHERE name = ?';
	db.query(q, name, (err, result) => {
		if (err) {
			res.send({ err: err });
		}

		return res.json(result);
	});
});

app.listen(8800, () => {
	console.log('SERVER WORKING');
});
