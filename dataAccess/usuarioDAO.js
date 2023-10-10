const Usuario = require("../models/usuario");

class UsuarioDAO{

    async crearUsuario({nombre, tipo, email, password, telefono}){
        try{
            const usuario = new Usuario({nombre, tipo, email, password, telefono});
            await usuario.save();
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarioPorId(id){
        try{
            const usuario = await Usuario.findById(id);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarioPorCorreo(email){
        try{
            const usuario = await Usuario.findOne({email});
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
            const usuario = Usuario.findByIdAndRemove(id);
            return usuario;
        } catch(error){
            throw error;
        }
    }

}

module.exports = new UsuarioDAO();
