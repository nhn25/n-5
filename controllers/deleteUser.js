const ctrlHome = {};
const User = require('../models/usuario');

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

// Cambiar el estado activo de un usuario (Eliminación lógica)
ctrlHome.deleteUser = async (req, res) => {
    const { id }  = req.body
    const user = await User.findByIdAndUpdate(id, { activo: false }, { new: true });

    // Respuesta del servidor
    res.json({
        msg: 'Usuario eliminado correctamente',
        user
    });
}


module.exports = ctrlHome;