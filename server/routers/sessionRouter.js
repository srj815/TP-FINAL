const express = require('express')
const { createUser } = require('../dao/controllers/userController')
const sessionRouter = express.Router()

sessionRouter.post('/', async(req, res) => {
    const {nombre, email, contrasena} = req.body
    try {
        const newUser = await createUser({ nombre, email, contrasena });
        res.status(200).json({ ok: true, content: 'Usuario creado con éxito' });
    } catch (error) {
        res.status(500).json({ ok: false, error: 'Error al crear usuario' });
    }
});


module.exports  = sessionRouter