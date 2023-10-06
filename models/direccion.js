const {Schema} = require("mongoose")

const direccionSchema = new Schema({
    calle: {
        type: String,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    codigo_postal: {
        type: Number,
        required: true
    },
    numero_exterior: {
        type: Number,
        required: true
    }
})

module.exports = direccionSchema;