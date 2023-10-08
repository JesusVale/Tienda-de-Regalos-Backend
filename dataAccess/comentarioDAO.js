const Comentario = require("../models/comentario")

class ComentarioDAO {

    async crearComentario({usuario, articulo, rating, descripcion}){
        try{
            const comentario = new Comentario({usuario, articulo, rating, descripcion});
            await comentario.save();
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async eliminarComentario(id){
        try{
            const comentario = Comentario.findByIdAndRemove(id);
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async obtenerComentariosPorArticulo(id_articulo){
        try{
            const comentarios = Comentario.find({articulo: id_articulo}).populate("usuario", nombre)
            return comentarios;
        } catch(error){
            throw error;
        } 
    }

}

module.exports = new ComentarioDAO();
