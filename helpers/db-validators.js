const { articuloDAO, usuarioDAO, comentarioDAO } = require("../dataAccess")


async function existeUsuarioPorId(id){
    const usuario = await usuarioDAO.obtenerArticuloPorId(id);

    if(!usuario){
        throw new Error("El Usuario no existe")
    }
}

async function emailExiste(email){
    const usuario = await usuarioDAO.obtenerUsuarioPorCorreo(email);
    if(usuario){
        throw new Error("El correo ya está registrado")
    }
}

async function existeArticuloPorId(id){
    const articulo = await articuloDAO.obtenerArticuloPorId(id);

    if(!articulo){
        throw new Error("El Articulo no existe")
    }
}

async function existeComentarioPorId(id){
    const comentario = await comentarioDAO.obtenerComentarioPorId(id);

    if(!comentario){
        throw new Error("El Comentario no existe")
    }
}

module.exports = {
    existeUsuarioPorId,
    emailExiste,
    existeArticuloPorId,
    existeComentarioPorId
}