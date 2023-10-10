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

    async eliminarArticuloCarrito({usuario, articulo}){
        try{
            const carrito = await Carrito.findOneAndRemove({usuario, articulo});
            return carrito;
        } catch(error){
            throw error;
        }
    }

    async actualizarArticuloCarrito({usuario, articulo}, cantidad){
        try{
            const carrito = await Carrito.findOneAndUpdate({usuario, articulo}, {cantidad}, {new: true})
            return carrito;
        } catch(error){
            throw error;
        }
    }

    async obtenerCarritoPorUsuario(usuario){
        try{
            const carrito = await Carrito.find({usuario}).populate("articulo", "nombre imagen precio");
            return carrito;
        } catch(error){
            throw error;
        }
    }

}

module.exports = new CarritoDAO();