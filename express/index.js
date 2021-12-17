const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'client')));
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});