const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

/*
app.get("/", (req, res) =>{
	console.log('hi');
	res.render("hey");
});
*/

app.get("/api/getConsumes/:usr", (req, res) => {
	const user_id = req.params.usr;
	const query="SELECT product_name, time FROM Drink, (select drink_id_fk, time from Consumes where user_id_fk = ?) consume WHERE consume.drink_id_fk = Drink.drink_id";
	db.query(query, user_id, 
			(err, result) =>{
				if(err){
					console.log(err);
				}
				res.send(result)
			});
});

app.get("/api/getDrink/:str", (req, res) => {
	const str = req.params.str;
	const regex = `${str}.*`;
	db.query("SELECT drink_id, product_name FROM Drink WHERE product_name REGEXP ?", regex,
		(err, result) => {
			if(err){
				console.log(err);
			}
			res.send(result)
		});
	});


app.post("/api/post/", (req, res) =>{
	const drink_id = req.body.drink_id;
	const user_id = req.body.user_id;
	console.log(drink_id);
	console.log(user_id);
	const query_string = "INSERT INTO Consumes (user_id_fk, drink_id_fk) VALUES (?, ?)";
	db.query(query_string, [user_id, drink_id], 
		(err, result) => {
			if(err){
				console.log(err);
			}
		});		 
	
	});


app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});
