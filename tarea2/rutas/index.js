const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contacto.html'));
});

/* 
Esta ruta al final no fue necesaria, ya que se usó el servicio de web3forms para manejar el formulario. 
router.post('/contacto', (req, res) => {}); 
*/

router.get('/confirmar', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/conf.html'));
});