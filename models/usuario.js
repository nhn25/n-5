const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    "registro usuario": {
        username: {type: String, required: true},

        email: {type: String, required: true},

        rol: {type:String, required: true},

    }})

module.exports = model('usuario', UserSchema);