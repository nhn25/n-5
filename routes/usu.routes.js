const router = require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt')
const {verificar_Admin} = require('../middlewares/validar_rol')
const { body, check } = require('express-validator');
const {validar_campos} = require ('../helpers/validar_campos')
const rol = require('../models/rol')

const {
    rutaGet, rutaPost, rutaLogin, rutaPut, rutaDelete, deleteUser
} = require('../controllers/USU_controllers')



//  Ruta que devuelve todos los usuarios
router.get('/get-user', rutaGet)

router.post('/create-user',
body('username','El usuario es incorrecto')
.not()
.isEmpty(),
body('email','El Email es incorrecto').isEmail(),
body('password','La contrase debe contener 6 caracteres')
.isLength({min: 6})
.not()
.isEmpty(),
body('rol', 'El rol no es valido')
.not()
.isEmpty(),
//validar_campos,
rutaPost)

router.post('/login-user', rutaLogin)


// Actualizar usuarios
router.put('/edit-user/:id',
body('username','El Email es incorrecto').isEmail(),
body('password','La contrase debe contener 6 caracteres').isLength({min: 6}),
body('role', 'El rol no es valido').isIn('ADMIN'),
//validar_campos, 
rutaPut)


router.delete('/delete-user/:id',body('id','La id no es valida').isMongoId(), rutaDelete)




module.exports = router;