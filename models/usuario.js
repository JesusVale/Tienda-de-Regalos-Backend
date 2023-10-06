const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        enum: ["Usuario", "Administrador"]
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});


module.exports = model("Usuario", UsuarioSchema);