const compraDAO = require("../dataAccess/compraDAO")

async function crearCompra(req, res){
    const {
        metodo_pago,
        total,
        direccion,
        articulos
    } = req.body;

    const { _id: usuario } = req.usuario;
    
    const compra = await compraDAO.crearCompra({metodo_pago, total, direccion, articulos, usuario});

    res.status(201).json(compra);
    
}

async function obtenerCompraPorUsuario(req, res){
    const { id } = req.params;

    const compra = compraDAO.obtenerCompraPorUsuario(id);

    res.json(compra);

}

module.exports = {
    crearCompra,
    obtenerCompraPorUsuario
}
