const {Schema} = require("mongoose")

const envioSchema = new Schema({
    costo:{
        type: Decimal,
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
        enum: ["Revisando Stock", "Enviado", "En camino", "Entregado"]
    },
    partida:{
        type: Schema.Types.ObjectId, 
        ref: "Direccion",
        required: true
    },
    destino:{
        type: Schema.Types.ObjectId, 
        ref: "Direccion",
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
    }

    
    
})