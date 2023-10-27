const usuarioDAO = require("../dataAccess/usuarioDAO")
const bcryptjs = require('bcryptjs');

async function crearUsuario(req, res){
    const {
        nombre,
        tipo, 
        email, 
        password, 
        telefono
    } = req.body;

    const salt = bcryptjs.genSaltSync();
    const encryptedPassword = bcryptjs.hashSync(password, salt);

    const usuario = await usuarioDAO.crearUsuario({nombre, tipo, email, password: encryptedPassword, telefono});
    res.json(usuario)
}

async function obtenerUsuarioId(req, res){
    const { id } = req.params;

    const usuario = await usuarioDAO.obtenerUsuarioPorId(id)

    res.json(usuario)
}

async function actualizarUsuario(req, res){
    const { id } = req.params;
    const {_id, password, ...data} = req.body;
    
    const usuario = await usuarioDAO.actualizarUsuario(id, data);

    res.json(usuario)

}

module.exports = {
    crearUsuario,
    obtenerUsuarioId,
    actualizarUsuario
}