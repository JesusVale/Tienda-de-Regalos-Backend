const {Router} = require("express");

const {crearUsuario, obtenerUsuarioId, actualizarUsuario } = require("../controllers/usuario")

const router = Router();

router.post("/", crearUsuario)

router.get("/:id", obtenerUsuarioId)

router.put("/:id", actualizarUsuario)

module.exports = router