const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    "registro usuario": {
        username: {type: String, required: true},

        email: {type: String, required: true},

        password: {type: String, required: true},

        rol: {type:String, required: true},

    }})

UserSchema.method.toJSON = function () {
    const { __v, _id, password, ...usuario } = this.toObject();
    usuario.nid = _id;
    return usuario;
}

module.exports = model('usuario', UserSchema);