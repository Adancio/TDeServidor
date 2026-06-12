const express = require('express');
const path = require('path');
const router = express.Router();

const views = path.join(__dirname, 'views');

router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.sendFile(path.join(views, 'index.html'));
});

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(views, 'contacto.html'));
});

router.post('/contacto', (req, res) => {
    res.redirect('/confirmar');
});

router.get('/confirmar', (req, res) => {
    res.sendFile(path.join(views, 'confirmar.html'));
});

module.exports = router;
