const {Schema, model} = require("mongoose");
const direccionSchema = require("./direccion")

const articuloCompraEsquema = new Schema({
    _id: false,
    articulo: {
        type: Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }
});

const compraSchema = new Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    metodo_pago: {
        type: String,
        required: true,
        enum: ["debito/credito", "transferencia", "paypal"]
    },
    total:{
        type: Number,
        required: true
    },
    direccion:{
        type: direccionSchema,
        required: true
    },
    articulos:[articuloCompraEsquema]    
});
module.exports = model("Compra", compraSchema);