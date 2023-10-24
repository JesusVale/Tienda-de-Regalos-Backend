const express = require("express")
const cors = require('cors');
const conectarBD = require("../config/db")
const {
    routerUsuario
} = require("../routes/index")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080
        this.paths = {
            usuarios: "/usuarios"
        }
        this.connectBD();
        this.middlewares();
        this.routes();
    }

    async connectBD(){
        await conectarBD()
    }

    routes(){
        this.app.use(this.paths.usuarios, routerUsuario)
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