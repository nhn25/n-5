const { response } = require('express');
//const User = require('../models/User');

const verificar_Admin = (req, res = response, next) => {
    const {role} = req.usuario;
    

    //verificamos en la BD si el usuario tiene el rol de Admin
    if(role !== ' '){

        return res.status(401).json({
            msg:"No tiene permisos"
        })
    };

    next(); 
};

module.exports = {
    verificar_Admin
}