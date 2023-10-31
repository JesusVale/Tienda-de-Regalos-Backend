const { compraDAO, envioDAO, articuloDAO } = require("../dataAccess")
const calcularDistanciaTiempo = require("../helpers/calcular-distancia")

async function crearCompra(req, res){
    const {
        metodo_pago,
        direccion,
        articulos
    } = req.body;

    const { _id: usuario } = req.usuario;

    let total = 0;

    for(let i = 0; i < articulos.length; i++){
        const {articulo: articuloId, cantidad} = articulos[i];
        const articulo = await articuloDAO.obtenerArticuloPorId(articuloId);

        total +=  articulo.precio * cantidad;

        const {distancia, duracion: tiempo} = calcularDistanciaTiempo(articulo.direccion, direccion);
        const costo = distancia*20
        let fechaLlegadaEstimada = new Date();
        if(tiempo.includes("months")){
            const numero = tiempo.replace(" months", "");
            fechaLlegadaEstimada.setDate(fechaLlegadaEstimada.getMonth() + Number(numero));
        } else{
            const numero = tiempo.replace(" days", "");
            fechaLlegadaEstimada.setDate(fechaLlegadaEstimada.getDate() + Number(numero));
        }
        await envioDAO.crearEnvio({
            costo,
            estado: "En camino", 
            articulo, 
            partida: articulo.direccion, 
            destino: direccion, 
            usuario,
            fechaSalida: new Date(),
            fechaLlegadaEstimada 
        })
    }

    const compra = await compraDAO.crearCompra({metodo_pago, total, direccion, articulos, usuario});

    res.status(201).json(compra);
    
}

async function obtenerCompraPorUsuario(req, res){
    const { _id: id } = req.usuario;

    const compra = await compraDAO.obtenerCompraPorUsuario(id);

    res.json(compra);

}

module.exports = {
    crearCompra,
    obtenerCompraPorUsuario
}
