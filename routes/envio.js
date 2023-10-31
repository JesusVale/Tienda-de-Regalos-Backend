const {Router} = require("express")
const {
    obtenerEnvioPorId,
    obtenerEnviosPorUsuario,
    obtenerEnviosRecientes
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

router.get("/", [
    validarJWT,
    validarCampos
], obtenerEnviosPorUsuario)

router.get("/search/recientes",[
    validarJWT,
    validarCampos
], obtenerEnviosRecientes)

module.exports = router;