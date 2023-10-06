const {Schema, model} = require("mongoose");
const direccionSchema = require("../models/direccion")

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