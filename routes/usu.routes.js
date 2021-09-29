const router = require('express').Router();

const { 
    rutaVista,rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers');

//  Ruta que devuelve todos los usuarios

router.get('/controllers/getUser.js')

// ruta que inserta el usuario

router.post('/controllers/createUser.js', rutaPost)

// Actualizar usuarios

router.put('/controllers/editUser.js', rutaPut)

// eliminar usuarios 

router.delete('/controllers/deleteUser.js', rutaDelete)

module.exports = router;