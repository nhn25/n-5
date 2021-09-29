const ctrlEdit = {};
const User = require('../models/usuario');

ctrlHome.rutaPut = async (req, res) => {
    
    const id = req.params.id;
    const {username, password, rol } = req.body;
    const user = await User.findByIdAndUpdate(id, { username, password, rol }, { new: true })

    res.json({
        msg: 'usuario actualizado correctamente',
        user
    })
}


module.exports = ctrlEdit;