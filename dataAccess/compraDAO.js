const Compra = require("../models/compra");

class CompraDAO{
    
    async crearCompra({usuario,tipo,total,direccion,articulo}){
        try{
        const compra = new Compra({usuario,tipo,total,direccion,articulo});
        return compra;
        }catch(error){
            throw error;
        }
    }

    async obtenerCompraPorUsuario(usuarioId){
        try {
            const compra = await Envio.find({ usuario: usuarioId });
            return compra;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CompraDAO();