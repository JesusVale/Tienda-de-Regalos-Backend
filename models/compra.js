const {Schema} = require("mongoose")

const compraSchema = new Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    tipo: {
        type: String,
        required: true,
        enum: ["Debito", "Credito"]
    },
    total:{
        type: Decimal,
        required: true
    },
    direccion:{
        type: Schema.Types.ObjectId,
        ref: "Direccion",
        required: true
    },
    articulo:{
        type: Schema.Types.ObjectId,
        ref: "Articulo",
        required: true
    }    
});
module.exports = model("Compra", compraSchema);