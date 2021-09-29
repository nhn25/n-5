const router = require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt')
const {verficarAdmin} = require('../middlewares/validar_rol')
const { body } = require('express-validator');
const { validarCampos } = require ('../helpers/validar_campos')
const Roles = require('../models/roles')

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




//  Ruta que devuelve todos los usuarios
router.get('/api/get-user', rutaGet)

router.post('/api/create-user',
body('username','El Email es incorrecto').isEmail(),
body('password','La contrase debe contener 6 caracteres')
.isLength({min: 6})
.not()
.isEmpty(),
body('role', 'El rol no es valido')

.custom(),
validarCampos,
validar_jwt, rutaPost)

router.post('/api/login-user', rutaLogin)

// Actualizar usuarios
router.put('/api/edit-user/:id',
body('username','El Email es incorrecto').isEmail(),
body('password','La contrase debe contener 6 caracteres').isLength({min: 6}),
body('role', 'El rol no es valido').isIn('ADMIN'),
validarCampos, rutaPut)

router.put('/', deleteUser)

router.delete('/api/delete-user/:id', rutaDelete)





module.exports = router;