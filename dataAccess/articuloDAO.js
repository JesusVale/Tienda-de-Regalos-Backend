const Articulo = require("../models/articulo");

class ArticuloDAO{

    async crearArticulo({nombre, descripcion, imagen, precio, stock, direccion, administrador}){
        try{
            const articulo = new Articulo({nombre, descripcion, imagen, precio, stock, direccion, administrador});
            await articulo.save();
            return articulo;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulos(limit){
        try{
            const articulos = await Articulo.find().limit(limit).populate("administrador", "nombre");
            return articulos;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticuloPorId(id){
        try{
            const articulo = await Articulo.findById(id).populate("administrador", "nombre");
            return articulo;
        } catch(error){
            throw error;
        }
    }

    async actualizarArticulo(id, {nombre, descripcion, imagen, precio, stock, direccion, administrador}){
        try{
            const articulo = Articulo.findByIdAndUpdate(id, {nombre, descripcion, imagen, precio, stock, direccion, administrador}, {new: true});
            return articulo;
        } catch(error){
            throw error;
        } 
    }

    async eliminarArticulo(id){
        try{
            const articulo = Articulo.findByIdAndRemove(id, {new: true})
            return articulo;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosPorPrecio({min, max}){
        const query = {
            precio: {$gte: min, $lte: max }
        }
        try{    
            const articulos = await Articulo.find(query);
            return articulos;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosDisponibles() {
        const query = {
            stock: { $gt: 0 }
        }
        try{    
            const articulos = await Articulo.find(query);
            return articulos;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosPorBusqueda(busqueda){
        const query = {
            nombre: { $regex: busqueda, $options: "i" }
        }
        try{    
            const articulos = await Articulo.find(query);
            return articulos;
        } catch(error){
            throw error;
        }
    }

}

module.exports = new ArticuloDAO();