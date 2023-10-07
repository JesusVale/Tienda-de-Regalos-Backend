const Comentario = require("../models/comentario");

class ComentarioDAO{

    async crearUsuario({id_usuario, id_articulo, rating, descripcion}){
        try{
            const comentario = new Comentario({id_usuario, id_articulo, rating, descripcion});
            await comentario.save();
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarioPorArticulo(id_articulo,limit){
        try{
            const articulo = await Articulo.findById(id_articulo).populate("administrador", "nombre");
            if(!articulo){
              throw new Error("Articulo no encontrado");
            }
            const comentarios = await Comentario.find().limit(limit).select(id_articulo: id_articulo);
            return comentarios;
        } catch(error){
            throw error;
        }
    }

    async eliminarUsuario(id){
        try{
            const comentario = Comentario.findById(id, {new: true})
            if(!comentario){
              throw new Error("Comentario no encontrado");
            }
            return Comentario.findByIdAndRemove(id, {new: true});
        } catch(error){
            throw error;
        }
    }

}

module.exports = new ComentarioDAO();
