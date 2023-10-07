module.exports = new ComentarioDAO();

const {Schema, model} = require("mongoose");
const UsuarioSchema = require("../models/usuario")

const comentarioSchema = new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }/*,
    administrador: { 
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }*/
})

module.exports = model("Comentario", comentarioSchema)