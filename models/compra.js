const {Schema, model} = require("mongoose");
const direccionSchema = require("./direccion")

const compraSchema = new Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    metodo_pago: {
        type: String,
        required: true,
        enum: ["Debito", "Credito"]
    },
    total:{
        type: Number,
        required: true
    },
    direccion:{
        type: direccionSchema,
        required: true
    },
    articulos:[{
        type: Schema.Types.ObjectId,
        ref: "Articulo",
        required: true
    }]    
});
module.exports = model("Compra", compraSchema);