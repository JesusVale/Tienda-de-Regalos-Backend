
const {Schema, model} = require("mongoose");

const comentarioSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    articulo: {
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
    }
})

module.exports = model("Comentario", comentarioSchema)
