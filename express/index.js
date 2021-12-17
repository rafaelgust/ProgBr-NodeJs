const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, './client')));
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

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})