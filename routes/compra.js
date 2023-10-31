const { Router } = require("express");
const {
    crearCompra,
    obtenerCompraPorUsuario
} = require("../controllers/compra")
const validarJWT = require("../middlewares/validar-jwt")
const {validarCampos} = require("../middlewares/validar-campos")
const { param, body } = require("express-validator")
const { existeUsuarioPorId } = require("../helpers/db-validators")

const router = Router();

router.post("/",[
    validarJWT,
    body("metodo_pago", "El metodo de pago debe ser Debito o Credito").isIn(["Debito", "Credito"]),
    body("total").isDecimal(),
    body("articulos").notEmpty(),
    validarCampos
], crearCompra);

router.get("/",[
    validarJWT,
    validarCampos
], obtenerCompraPorUsuario)

module.exports = router;
