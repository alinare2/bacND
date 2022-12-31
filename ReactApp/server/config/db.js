const mysql = require('mysql');
const db = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "poopoopeepee",
		database: "test"});

module.exports = db;
