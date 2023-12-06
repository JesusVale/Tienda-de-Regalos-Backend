const envioDAO = require("../dataAccess/envioDAO")

async function obtenerEnvioPorId(req, res){
    const { id } = req.params;

    const envio = await envioDAO.obtenerEnvioPorId(id);

    res.json(envio);
}

async function obtenerEnviosPorUsuario(req, res){
    const { _id: id  } = req.usuario;

    const envios = await envioDAO.obtenerEnvioPorUsuario(id)

    res.json(envios);
}

async function obtenerEnviosRecientes(req, res){
    const { _id: id  } = req.usuario;

    const envios = await envioDAO.obtenerEnviosRecientes(id);

    res.json(envios);
}

async function obtenerEnviosPorFecha(req, res){
    const { fecha } = req.params;
    const usuario = req.usuario;
    const envios = await envioDAO.obtenerEnvioPorFecha(new Date(fecha), usuario);

    res.json(envios);

}

async function actualizarEnvio(req, res){
    const { id } = req.params;
    const { estado } = req.body;
    const envio = await envioDAO.actualizarEnvio(id, {estado})

    res.json({
        envio
    })
}

module.exports = {
    obtenerEnvioPorId,
    obtenerEnviosPorUsuario,
    obtenerEnviosRecientes,
    obtenerEnviosPorFecha,
    actualizarEnvio
}