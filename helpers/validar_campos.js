const { validationResult } = require("express-validator");

const validar_campos = async (req, res, next) => {
    const errores = await validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    next();
};
module.exports = {
    validar_campos
}