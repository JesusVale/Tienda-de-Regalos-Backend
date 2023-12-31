const express = require("express")
const fileUpload = require('express-fileupload');
const cors = require('cors');
const conectarBD = require("../config/db")
const {
    routerUsuario,
    routerAuth,
    routerArticulo,
    routerComentario,
    routerCarrito,
    routerCompra,
    routerEnvio
} = require("../routes/index")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080
        this.paths = {
            usuarios: "/usuarios",
            auth: "/auth",
            articulos: "/articulos",
            comentarios: "/comentarios",
            compra: "/compras",
            carrito: "/carrito",
            envio: "/envios"
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
        this.app.use(this.paths.auth, routerAuth)
        this.app.use(this.paths.articulos, routerArticulo)
        this.app.use(this.paths.comentarios, routerComentario)
        this.app.use(this.paths.carrito, routerCarrito)
        this.app.use(this.paths.compra, routerCompra)
        this.app.use(this.paths.envio, routerEnvio)
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;