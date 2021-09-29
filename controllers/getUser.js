const ctrlGet = {};
const User = require('../models/usuario');


ctrlHome.rutaGet = async (req, res) => {

    const id = req.params.id;
    const users = await User.find({activo: true}) 

    res.json(users);
}

module.exports = ctrlGet;