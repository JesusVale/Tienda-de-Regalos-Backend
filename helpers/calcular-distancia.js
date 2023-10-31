
//Retorna la distancia en kilometros
function calcularDistanciaTiempo(partida, destino){
    const distancia = Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000;
    const minutos = distancia*2;
    const dias = (minutos * 60)/24;
    if(dias >= 30){
        const meses = dias/30;
        return {distancia, duracion: `${Math.floor(meses)} months` }
    }
    return {distancia, duracion: `${Math.floor(meses)} days` }
}

module.exports = calcularDistanciaTiempo;