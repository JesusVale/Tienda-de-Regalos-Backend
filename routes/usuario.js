const {Router} = require("express");
const { body, param } = require("express-validator")
const { existeUsuarioPorId, emailExiste } = require("../helpers/db-validators")
const {crearUsuario, obtenerUsuarioId, actualizarUsuario } = require("../controllers/usuario")
const {validarCampos} = require("../middlewares/validar-campos")

const router = Router();

router.post("/",[
    body("tipo", "El tipo de usuario no es válido").isIn(["Usuario", "Administrador"]),
    body("email", "El email no es válido").isEmail(),
    body("email").custom(emailExiste),
    validarCampos
], crearUsuario)

router.get("/:id",[
    param("id").custom(existeUsuarioPorId),
    validarCampos
], obtenerUsuarioId)

router.put("/:id",[
    param("id").custom(existeUsuarioPorId),
    validarCampos
], actualizarUsuario)

module.exports = router