const {Schema, model} = require("mongoose")

const carritoSchema = new Schema({
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
    cantidad: {
        type: Number,
        required: true
    }
})

module.exports = model("Carrito", carritoSchema);