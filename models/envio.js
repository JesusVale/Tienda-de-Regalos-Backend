const {Schema, model} = require("mongoose")
const direccionSchema = require("./direccion")

const envioSchema = new Schema({
    costo:{
        type: Number,
        required: true
    },
    articulo:{
        type: Schema.Types.ObjectId, 
        ref: "Articulo",
        required: true
    },
    estado:{
        type: String,
        required: true,
        enum: ["En proceso", "En camino", "Entregado"]
    },
    partida:{
        type: direccionSchema,
        required: true
    },
    destino:{
        type: direccionSchema,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId, 
        ref: "Usuario",
        required: true
    },
    fechaSalida:{
        type: Date,
        required: true
    },
    fechaLlegadaEstimada:{
        type: Date,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = model("Envio", envioSchema);