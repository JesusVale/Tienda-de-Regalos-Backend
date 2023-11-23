const {Schema, model} = require("mongoose");
const direccionSchema = require("../models/direccion")
const {categorias} = require("../constants")

const articuloSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        enum: categorias
    },
    stock: {
        type: Number,
        required: true
    },
    direccion: {
        type: direccionSchema,
        required: true
    },
    administrador: { 
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }
})

module.exports = model("Articulo", articuloSchema)