const Compra = require("../models/compra");

class CompraDAO{
    
    async crearCompra({usuario, metodo_pago, total, direccion, articulos}){
        try{
            const compra = new Compra({usuario, metodo_pago, total, direccion, articulos});
            await compra.save();
            return compra;
        }catch(error){
            throw error;
        }
    }

    async obtenerCompraPorUsuario(usuarioId){
        try {
            const compra = await Compra.find({ usuario: usuarioId }).populate("articulos.articulo", "nombre precio imagen");
            return compra;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CompraDAO();