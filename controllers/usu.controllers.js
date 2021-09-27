const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/usuario');
const User = require('../models/usuario');

ctrlHome.rutaVista = async (req, res) => {
    const users = await User.find() 

    res.json(users);
}


ctrlHome.rutaGet = async (req, res) => {

    const id = req.params.id;
    const users = await User.findById(id) 

    res.json(users);
}


ctrlHome.rutaPost = async (req, res) => {
    const usuario = req.body;
    const user = new User( usuario);
    await user.save() 

    res.json({msg: 'alumno creado correctamente'});
}


ctrlHome.rutaPut = async (req, res) => {
    
    const id = req.params.id;
    const usuario = req.body;
    const user = await User.findByIdAndUpdate(id,usuario,{ new: true })

    res.json({
        msg: 'usuario actualizado correctamente',
        user
    })
}

ctrlHome.rutaDelete = async (req, res) => {
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

module.exports = ctrlHome;