const usuarioDAO = require("../dataAccess/usuarioDAO")
const bcryptjs = require("bcryptjs")
const generarJWT = require("../helpers/generar-jwt")

async function login(req, res){

    const {
        email,
        password
    } = req.body;

    try{
        const usuario = await usuarioDAO.obtenerUsuarioPorCorreo(email);
        if(!usuario){
            return res.status(400).json({
                msg: "No existe un usuario con el correo proporcionado"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password)
        if(!validPassword){
            return res.status(400).json({
                msg: "Correo o contraseña incorrectos"
            })
        }

        const token = await generarJWT(usuario._id)

        res.json({
            usuario,
            token
        })

    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Problema al generar el token'
        });
    }

}

module.exports = {
    login
}