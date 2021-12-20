const express = require('express');
const admin = require('./routes/admin');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, './client')));
	//metodos
		app.get("/methods", (req, res) => {
			res.send('<h1>get</h1>');
		});
		app.post("/methods", (req, res) => {
			res.send('<h1>post</h1>');
		});
		app.put("/methods", (req, res) => {
			res.send('<h1>put</h1>');
		});
		app.delete("/methods", (req, res) => {
			res.send('<h1>delete</h1>');
		});
	//parametros
		app.get('/user/:id', function (req, res) { // /user/2
			res.send(`usuário com o id ${req.params.id}`);
		});

		app.get('/user', function (req, res) { // /user/id=2
			res.send(`usuário com o id ${req.query.id}`);
		});
	//rotas


app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})