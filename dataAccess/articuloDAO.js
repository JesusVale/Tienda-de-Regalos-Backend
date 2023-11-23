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

    async obtenerArticulos(from = 0, limit = 10){
        try{
            const articulos = await Articulo.find().skip(from).limit(limit).populate("administrador", "nombre");
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

    async actualizarArticulo(id, data){
        try{
            const articulo = Articulo.findByIdAndUpdate(id, data, {new: true});
            return articulo;
        } catch(error){
            throw error;
        } 
    }

    async eliminarArticulo(id){
        try{
            const articulo = Articulo.findByIdAndRemove(id)
            return articulo;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosPorPrecio({min, max}){
        const query = {};

        if (min) query.$gte = min;
        if (max) query.$lte = max;

        try{    
            const articulos = await Articulo.find({precio: query}).sort({precio: 1});
            return articulos;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosPorCategoria(categoria){
        try{    
            const articulos = await Articulo.find({categoria});
            return articulos;
        } catch(error){
            throw error;
        }
    }

    async obtenerArticulosPorRating(rating){
        try{
            const articulos = await Articulo.find({rating});
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

    async obtenerArticulosPorAdministrador(idAdministrador){
        try{    
            const articulos = await Articulo.find({administrador: idAdministrador});
            return articulos;
        } catch(error){
            throw error;
        }
    }

}

module.exports = new ArticuloDAO();