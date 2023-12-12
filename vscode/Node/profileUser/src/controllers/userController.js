const User = require('../models/userModel');

exports.signup = async (req, res) => {
    try {
        const { firstname, lastname, age, email, password } = req.body;

        // Verifica si el usuario o el correo ya existen
        const existingUser = await User.findOne({ $or: [{ email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuario o correo electrónico ya existen' });
        }

        // Crea un nuevo usuario
        const newUser = new User({ firstname, lastname, age, email, password });
        await newUser.save();

        // Redirige al usuario a la página principal después del registro exitoso
        return res.redirect('/api/user');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};