const {Router} = require("express")
const {
    obtenerEnvioPorId,
    obtenerEnviosPorUsuario,
    obtenerEnviosRecientes,
    obtenerEnviosPorFecha,
    actualizarEnvio
} = require("../controllers/envio")
const  validarJWT  = require("../middlewares/validar-jwt")
const {validarCampos} = require("../middlewares/validar-campos")
const { param } = require("express-validator")
const { existeEnvioPorId } = require("../helpers/db-validators")

const router = Router();

router.get("/:id",[
    validarJWT,
    param("id").custom(existeEnvioPorId),
    validarCampos
], obtenerEnvioPorId )

router.put("/:id",[
    validarJWT,
    param("id").custom(existeEnvioPorId),
    validarCampos
], actualizarEnvio )

router.get("/", [
    validarJWT,
    validarCampos
], obtenerEnviosPorUsuario)

router.get("/search/recientes",[
    validarJWT,
    validarCampos
], obtenerEnviosRecientes)

router.get("/search/date/:fecha",[
    validarJWT,
    validarCampos
], obtenerEnviosPorFecha)

module.exports = router;