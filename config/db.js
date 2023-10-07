const mongoose = require("mongoose");

async function conectarBD(){
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(error){
        console.log(error)
        throw Error
    }
}

module.exports = conectarBD;