const { comentarioDAO, articuloDAO } = require("../dataAccess/index.js");

async function crearComentario(req, res){
    const {
        articulo,
        rating,
        descripcion
    } = req.body;

    const { _id: usuario } = req.usuario;
    
    const comentario = await comentarioDAO.crearComentario({articulo, rating, descripcion, usuario});
    const comentariosArticulo = await comentarioDAO.obtenerComentariosPorArticulo(articulo);
    if(comentariosArticulo.length > 0){
        let newRating = comentariosArticulo.reduce((accumulator, {rating}) => accumulator + rating, 0);
        newRating = newRating / comentariosArticulo.length
        await articuloDAO.actualizarArticulo(articulo, {rating: newRating})
    }
    

    res.status(201).json(comentario);
    
}

async function obtenerComentariosPorArticulo(req, res){
    const { articulo } = req.params;

    const comentarios = await comentarioDAO.obtenerComentariosPorArticulo(articulo);

    res.json(comentarios)

}

async function eliminarComentario(req, res){
    const { id } = req.params;

    const comentario = comentarioDAO.eliminarComentario(id);

    res.json(comentario);

}

module.exports = {
    crearComentario,
    obtenerComentariosPorArticulo,
    eliminarComentario
}