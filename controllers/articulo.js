const { json } = require("express");
const articuloDAO = require("../dataAccess/articuloDAO");
const cloudinary = require('cloudinary').v2
cloudinary.config( {
    cloud_name: 'dbarpo6g3', 
    api_key: '669387991412917', 
    api_secret: process.env.CLOUDINARY_SECRET
});

async function crearArticulo(req, res){
    const {
        nombre,
        descripcion,
        precio,
        stock,
        direccion
    } = req.body;


    const {_id: administrador, tipo} = req.usuario;

    if(tipo !== "Administrador"){
        return res.status(401).json({
            msg: "Solo los Administradores pueden crear articulos"
        })
    }

    
    if(req.files?.imagen){
        const { tempFilePath } = req.files.imagen
        const { secure_url:imagen } = await cloudinary.uploader.upload( tempFilePath );
        
    } else{
        const imagen = "https://res.cloudinary.com/dbarpo6g3/image/upload/v1698216389/samples/ecommerce/shoes.png";
    }

    const articulo = await articuloDAO.crearArticulo({
        nombre,
        descripcion,
        imagen,
        rating: 5,
        precio,
        stock,
        direccion: JSON.parse(direccion),
        administrador
    })
    

    res.status(201).json(articulo)

}

async function obtenerArticulo(req, res){

    const {id} = req.params;

    const articulo = await articuloDAO.obtenerArticuloPorId(id);

    if(!articulo){
        return res.status(404).json({
            msg: "No existe un articulo con el id proporcionado"
        })
    }

    res.json(articulo);

}

async function obtenerArticulos(req, res){
    const { limit = 20, from = 0 } = req.query

    const articulos = await articuloDAO.obtenerArticulos(from, limit);

    res.json(articulos)

}

async function obtenerArticulosPrecio(req, res){
    
    const { min, max } = req.query;

    const articulos = await articuloDAO.obtenerArticulosPorPrecio({min: Number(min), max: Number(max)});

    res.json(articulos)
    
}

async function obtenerArticulosBusqueda(req, res){
    const { s } = req.query;

    const articulos = await articuloDAO.obtenerArticulosPorBusqueda(s);

    res.json(articulos)

}

async function obtenerArticulosDisponibles(_, res){
    
    const articulos = await articuloDAO.obtenerArticulosDisponibles();

    res.json(articulos)

}

async function obtenerArticulosPorAdministrador(req, res){
    const { _id } = req.usuario;

    const articulos = await articuloDAO.obtenerArticulosPorAdministrador(_id);

    res.json(articulos)

}

async function obtenerArticuloPorCategoria(req, res){
    const { categoria } = req.params;

    const articulos = await articuloDAO.obtenerArticulosPorCategoria(categoria);

    res.json(articulos);
}

async function obtenerArticuloPorRating(req, res){
    const { rating } = req.params;
    const articulos = await articuloDAO.obtenerArticulosPorRating(Number(rating));

    res.json(articulos);
}

async function actualizarArticulo(req, res){
    const { id } = req.params;
    const { _id, administrador, direccion, rating, ...data } = req.body;

    if(direccion){
        data.direccion = JSON.parse(direccion); 
    }

    if(req.files?.imagen){
        //Se elimina la imagen del articulo ya existente
        const articulo = await articuloDAO.obtenerArticuloPorId(id);
        const nombreArr = articulo.imagen.split('/');
        const nombre    = nombreArr[ nombreArr.length - 1 ];
        const [ public_id ] = nombre.split('.');
        cloudinary.uploader.destroy( public_id );

        //Se sube nueva imagen
        const {tempFilePath} = req.files.imagen;
        const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
        data.imagen = secure_url
    }

    const articuloActualizado = await articuloDAO.actualizarArticulo(id, data);

    res.json(articuloActualizado);

}

async function eliminarArticulo(req, res){
    const { id } = req.params;

    const articulo = await articuloDAO.eliminarArticulo(id)

    //Eliminar Imagen
    const nombreArr = articulo.imagen.split('/');
    const nombre    = nombreArr[ nombreArr.length - 1 ];
    const [ public_id ] = nombre.split('.');
    cloudinary.uploader.destroy( public_id );

    res.json(articulo);

}

module.exports = {
    crearArticulo,
    obtenerArticulos,
    obtenerArticulo,
    obtenerArticulosPorAdministrador,
    obtenerArticulosPrecio,
    obtenerArticulosBusqueda,
    obtenerArticulosDisponibles,
    obtenerArticuloPorCategoria,
    obtenerArticuloPorRating,
    actualizarArticulo,
    eliminarArticulo
}