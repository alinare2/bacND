const mysql = require('mysql');
const db = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "l33t_h4x0r",
		database: "test"});

module.exports = db;
