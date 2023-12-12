const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


// Ruta para manejar la solicitud POST de registro de usuario
router.post('/signup', UserController.signup);

// Ruta para manejar la solicitud GET a la página principal
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la página principal!');
});

module.exports = router;