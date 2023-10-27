const {Router} = require("express");
const { body, param } = require("express-validator")
const {crearUsuario, obtenerUsuarioId, actualizarUsuario } = require("../controllers/usuario")
const {validarCampos} = require("../middlewares/validar-campos")

const router = Router();

router.post("/",[
    body("tipo", "El tipo de usuario no es válido").isIn(["Usuario", "Administrador"]),
    body("email", "El email no es válido").isEmail(),
    validarCampos
    
], crearUsuario)

router.get("/:id", obtenerUsuarioId)

router.put("/:id", actualizarUsuario)

module.exports = router