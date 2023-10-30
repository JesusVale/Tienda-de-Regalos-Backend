const { Router } = require("express")
const {
    agregarArticuloCarrito,
    obtenerCarritoPorUsuario,
    actualizarArticuloCarrito,
    eliminarArticuloCarrito
} = require("../controllers/carrito");
const {
    body,
    param
} = require("express-validator");
const validarJWT = require("../middlewares/validar-jwt");
const { existeArticuloPorId } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos"); 



const router = Router();

router.post("/",[
    validarJWT,
    body("cantidad", "La cantidad debe ser un entero").isNumeric().optional(),
    body("articulo").custom(existeArticuloPorId).notEmpty(),
    validarCampos
], agregarArticuloCarrito)

router.get("/", [
    validarJWT,
    validarCampos
], obtenerCarritoPorUsuario);

router.put("/:articulo", [
    validarJWT,
    param("articulo").custom(existeArticuloPorId),
    body("cantidad", "La cantidad debe ser un entero"),
    validarCampos
], actualizarArticuloCarrito)

router.delete("/:articulo", [
    validarJWT,
    param("articulo").custom(existeArticuloPorId),
    validarCampos
], eliminarArticuloCarrito)

module.exports = router;