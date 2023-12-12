// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;


// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/appUser');
mongoose.connection.on('error', (error) => {
    console.error('Error de conexión a MongoDB:', error);
});
mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB');
});

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Configuración de rutas
app.use('/api/user', userRoutes);

// Rutas adicionales se pueden agregar aquí

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} , http://localhost:${PORT}`);
});