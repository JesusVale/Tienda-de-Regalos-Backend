module.exports = new ComentarioDAO();

const {Schema, model} = require("mongoose");
const UsuarioSchema = require("../models/usuario")
const articuloSchema = require("../models/articulo")

const comentarioSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    id_articulo: {
        type: Schema.Types.ObjectId,
        ref: "Articulo",
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
