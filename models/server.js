const express = require("express")
const cors = require('cors');
const conectarBD = require("../config/db")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080
        this.conectarBD();
        this.middlewares();
    }

    async conectarBD(){
        await conectarBD()
    }

    routes(){
        
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;