const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Página Inicial do admin");
});

router.get('/manage', (req, res) => {
    res.send("Página de gerencia do admin");
});

module.exports = router;