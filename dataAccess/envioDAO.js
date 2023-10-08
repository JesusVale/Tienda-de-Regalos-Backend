const Envio = require("../models/envio");

class EnvioDAO{

    async crearEnvio({costo, articulo, estado, partida, destino,usuario, fechaSalida, fechaLlegadaEstimada}){
        try{
            const envio = new Envio({costo, articulo, estado, partida, destino,usuario, fechaSalida, fechaLlegadaEstimada});
            await envio.save();
            return envio; 
        } catch(error){
            throw error;
        }
    }
    async obtenerEnvioPorId(id){
        try{
            const envio = await Envio.findById(id);
            return envio;
        } catch(error){
            throw error;
        }
    }
    async actualizarEnvio(id, {costo, articulo, estado, partida, destino,usuario, fechaSalida, fechaLlegadaEstimada}){
        try{
            const envio = Envio.findByIdAndUpdate(id, {costo, articulo, estado, partida, destino,usuario, fechaSalida, fechaLlegadaEstimada}, {new: true});
            return envio;
        } catch(error){
            throw error;
        } 
    }
    async ObtenerEnvioPorUsuario(usuarioId){
        try {
            const envios = await Envio.find({ usuario: usuarioId });
            return envios;
        } catch (error) {
            throw error;
        }
    }
    async obtenerEnviosRecientes(usuarioId){
        try {
            const envios = await Envio.find({ usuario: usuarioId })
                .sort({ fechaLlegadaEstimada: -1 }); // Ordena por fechaLlegadaEstimada en orden descendente
    
            return envios;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new EnvioDAO();