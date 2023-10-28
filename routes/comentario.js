const { Router } = require("express");
const {
    crearComentario,
    obtenerComentariosPorArticulo,
    eliminarComentario
} = require("../controllers/comentario")
const validarJWT = require("../middlewares/validar-jwt")
const {validarCampos} = require("../middlewares/validar-campos")
const { param, body } = require("express-validator")
const { existeArticuloPorId, existeComentarioPorId } = require("../helpers/db-validators")

const router = Router();

router.post("/",[
    validarJWT,
    body("rating", "El rating debe ser un número del 1 al 5").isNumeric(),
    body("articulo").custom(existeArticuloPorId),
    validarCampos
], crearComentario);

router.get("/:articulo",[
    validarJWT,
    param("articulo").custom(existeArticuloPorId),
    validarCampos
], obtenerComentariosPorArticulo)

router.delete("/:id",[
    validarJWT,
    param("id").custom(existeComentarioPorId),
    validarCampos
], eliminarComentario)

module.exports = router;