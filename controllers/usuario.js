const usuarioDAO = require("../dataAccess/usuarioDAO")

async function crearUsuario(req, res){
    const {
        nombre,
        tipo, 
        email, 
        password, 
        telefono
    } = req.body;

    const usuario = await usuarioDAO.crearUsuario({nombre, tipo, email, password, telefono});
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