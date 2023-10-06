const mongoose = require("mongoose");

async function conectarBD(){
    try{
        await mongoose.connect(config.url, config.options)
    } catch(error){
        console.log(error)
        throw Error
    }
}

module.exports = conectarBD;