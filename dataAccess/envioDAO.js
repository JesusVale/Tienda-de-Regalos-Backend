const Envio = require("../models/envio");

class EnvioDAO{

    async crearEnvio({costo, articulo, estado, cantidad, partida, destino,usuario, fechaSalida, fechaLlegadaEstimada}){
        try{
            const envio = new Envio({costo, articulo, estado, partida, cantidad, destino,usuario, fechaSalida, fechaLlegadaEstimada});
            await envio.save();
            return envio; 
        } catch(error){
            throw error;
        }
    }
    async obtenerEnvioPorId(id){
        try{
            const envio = await Envio.findById(id).populate("articulo", "nombre precio descripcion imagen");
            return envio;
        } catch(error){
            throw error;
        }
    }
    async actualizarEnvio(id, data){
        try{
            const envio = Envio.findByIdAndUpdate(id, data, {new: true});
            return envio;
        } catch(error){
            throw error;
        } 
    }
    async obtenerEnvioPorUsuario(usuarioId){
        try {
            const envios = await Envio.find({ usuario: usuarioId }).populate("articulo", "nombre precio descripcion imagen");
            return envios;
        } catch (error) {
            throw error;
        }
    }
    async obtenerEnviosRecientes(usuarioId){
        try {
            const envios = await Envio.find({ usuario: usuarioId })
                .sort({ fechaLlegadaEstimada: -1 })
                .populate("articulo", "nombre precio"); // Ordena por fechaLlegadaEstimada en orden descendente
    
            return envios;
        } catch (error) {
            throw error;
        }
    }

    async obtenerEnvioPorFecha(fecha, usuario){
        try{
            const inicioDia = new Date(fecha);
            inicioDia.setHours(0, 0, 0, 0);

            const finDia = new Date(fecha);
            finDia.setHours(23, 59, 59, 999);

            const envios = await Envio.find({ createdAt: {$gte: inicioDia, $lt: finDia}, usuario }).populate("articulo", "nombre precio descripcion imagen");
            return envios;
        } catch(error){
            throw error;
        }
    }

}
module.exports = new EnvioDAO();