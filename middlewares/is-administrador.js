
function isAdministrador(req, res, next){
    const { tipo } = req.usuario;

    if(tipo !== "Administrador"){
        return res.status(401).json({
            msg: "No se puede realizar esta acción si el usuario no es administrador"
        })
    }

    next();
}

module.exports = isAdministrador;