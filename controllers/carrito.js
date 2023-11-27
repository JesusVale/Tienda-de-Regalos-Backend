const CarritoDAO = require("../dataAccess/carritoDAO")

async function agregarArticuloCarrito(req, res){
    const {
        articulo,
        cantidad=1
    } = req.body;

    const { _id: usuario } = req.usuario;

    const carritos = await CarritoDAO.obtenerCarritoPorUsuario(usuario);

    const incluye = carritos.find(carrito => carrito.articulo._id.toString() === articulo);

    if(incluye){
        return res.status(400).json({
            msg: "Este articulo ya existe en el carrito"
        })
    }

    const carrito = await CarritoDAO.agregarArticuloCarrito({usuario, articulo, cantidad});

    res.status(201).json(carrito);
    
}

async function obtenerCarritoPorUsuario(req, res){
    const { _id: id } = req.usuario;

    const carrito = await CarritoDAO.obtenerCarritoPorUsuario(id);

    res.json(carrito)

}

async function actualizarArticuloCarrito(req, res){

    const {
        articulo
    } = req.params;

    const {
        cantidad
    } = req.body;
    
    const { _id: usuario } = req.usuario;

    const carrito = await CarritoDAO.actualizarArticuloCarrito({usuario,articulo}, cantidad);

    res.json(carrito)

}

async function eliminarArticuloCarrito(req, res){
    const {
        articulo
    } = req.params;
    
    const {  _id: usuario } = req.usuario;

    const carrito = CarritoDAO.eliminarArticuloCarrito({usuario, articulo});

    res.json(carrito);

}

module.exports = {
    agregarArticuloCarrito,
    obtenerCarritoPorUsuario,
    actualizarArticuloCarrito,
    eliminarArticuloCarrito
}
