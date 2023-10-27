const jwt = require('jsonwebtoken');
const usuarioDAO = require("../dataAccess/usuarioDAO")

async function validarJWT(req, res, next){
    const token = req.header('Authorization');

    if ( !token ) {
        return res.status(401).json({
            msg: 'Se necesita un token para realizar esta operación'
        });
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRET_PRIVATE_KEY);

        const usuario = await usuarioDAO.obtenerUsuarioPorId(id)

        if(!usuario){
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        req.usuario = usuario;
        next();


    } catch(error){
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = validarJWT