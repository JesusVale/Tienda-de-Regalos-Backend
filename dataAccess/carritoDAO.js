const Carrito = require("../models/carrito");

class CarritoDAO{

    async agregarArticuloCarrito({usuario, articulo}){
        try{
            const carrito = new Carrito({usuario, articulo, cantidad: 1});
            await carrito.save();
            return carrito
        } catch(error){
            throw error
        }
    }

    async eliminarArticuloCarrito(id){
        try{
            const carrito = await Carrito.findByIdAndRemove(id);
            return carrito;
        } catch(error){
            throw error;
        }
    }

    async actualizarArticuloCarrito(id, {cantidad}){
        try{
            const carrito = await Carrito.findByIdAndUpdate(id, {cantidad}, {new: true})
            return carrito;
        } catch(error){
            throw error;
        }
    }

    async obtenerCarritoPorUsuario(usuario){
        try{
            const carrito = await Carrito.find({usuario}).populate("articulo");
            return carrito;
        } catch(error){
            throw error;
        }
    }

}

module.exports = new CarritoDAO();