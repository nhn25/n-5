const ctrlUSU = {};
const {crear_jwt} = require('../helpers/crear_jwt');
const User = require('../models/usuario');
const { request, response } = require('express');

ctrlUSU.rutaPost = async (req = request, res = response) => {
    const {username, email,password,rol} = req.body;
    const user = new  User(username, email,password,rol);
    await user.save() 

    res.json({msg: 'usuario creado correctamente'});
}
ctrlUSU.rutaLogin = async (req = request, res = response) => {
    const { username, password} = req.body;
    const user = await usuario.findOne({username,password});
   
   
    //Si no encuentra el usuario
    if(!usuario){
        return res.status(401).json({
            msg: "Usuario no existe"
        })
    };

    //verificamos si es un usuario activo
    if(!usuario.activo){
        res.status(401).json({
            msg: "Usuario no existe"
        })
    }

    //Si lo encuentra

    const token = await crear_jwt(usuario.id); 
    
    res.json({
        msg: 'acceso permitido',
        usuario,
        token
    }); 
}



ctrlUSU.rutaGet = async (req = request, res = response) => {

    const id = req.params.id;
    const users = await user.find({activo: true}) 

    res.json(users);
}


ctrlUSU.rutaPut = async (req = request, res = response) => {
    
    const id = req.params.id;
    const {username, password, rol } = req.body;
    const user = await user.findByIdAndUpdate(id, { username, password, rol }, { new: true })

    res.json({
        msg: 'usuario actualizado correctamente',
        user
    })
}




ctrlUSU.rutaDelete = async (req = request, res = response) => {
    const  id = req.params.id;
    
    try {
       
        await User.findByIdAndDelete(id)

        res.json({
            msg: 'usuario eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar usuario: ', error)
    }
}

// Cambiar el estado activo de un usuario (Eliminación lógica)
ctrlUSU.deleteUser = async (req = request, res = response) => {
    const { id }  = req.body
    const user = await user.findByIdAndUpdate(id, { activo: false }, { new: true });

    // Respuesta del servidor
    res.json({
        msg: 'Usuario eliminado correctamente',
        user
    });
}


module.exports = ctrlUSU;