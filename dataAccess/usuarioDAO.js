const Usuario = require("../models/usuario");

class UsuarioDAO{

    async crearUsuario({id_usuario, id_articulo, rating, descripcion}){
        try{
            const usuario = new Usuario({nombre, tipo, email, password, telefono});
            await usuario.save();
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarioPorId(id_articulo,limit){
        try{
            const usuario= await Usuario.find().limit(limit);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async actualizarUsuario(id, {nombre, tipo, email, password, telefono}){
        try{
            const usuario = Usuario.findByIdAndUpdate(id, {nombre, tipo, email, password, telefono}, {new: true});
            return usuario;
        } catch(error){
            throw error;
        } 
    }

    async eliminarUsuario(id){
        try{
            const usuario = Usuario.findById(id, {new: true})
            if(!usuario){
              throw new Error("Usuario no encontrado");
            }
            return Usuario.findByIdAndRemove(id, {new: true});
        } catch(error){
            throw error;
        }
    }

}

module.exports = new ComentarioDAO();