const ctrlHome = {};
const User = require('../models/usuario');
const {crear_jwt} = require('../helpers/crear_jwt')

ctrlHome.rutaPost = async (req, res) => {
    const usuario = req.body;
    const user = new User( usuario);
    await user.save() 

    res.json({msg: 'usuario creado correctamente'});
}
ctrlPost.rutaLogin = async (req, res) => {
    const { username, password, rol} = req.body;
    const user = await User.findOne({username, password, rol});
   
   
    //Si no encuentra el usuario
    if(!user){
        return res.status(401).json({
            msg: "Usuario no existe"
        })
    };

    //verificamos si es un usuario activo
    if(!user.activo){
        res.status(401).json({
            msg: "Usuario no existe"
        })
    }

    //Si lo encuentra

    const token = await generar_jwt(user.id); 
    
    res.json({
        token
    }); 
}


module.exports = ctrlPost;