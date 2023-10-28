const { Router } = require("express")
const { crearArticulo,
        obtenerArticulos,
        obtenerArticulo,
        obtenerArticulosPrecio,
        obtenerArticulosBusqueda,
        obtenerArticulosDisponibles,
        obtenerArticulosPorAdministrador,
        actualizarArticulo,
        eliminarArticulo 
    } = require("../controllers/articulo")
const validarJWT = require("../middlewares/validar-jwt")
const isAdministrador = require("../middlewares/is-administrador")
const { body, param } = require("express-validator")
const {validarCampos} = require("../middlewares/validar-campos")
const { existeArticuloPorId } = require("../helpers/db-validators")

const router = Router()

router.get("/", obtenerArticulos)

router.get("/:id", obtenerArticulo)

router.get("/search/precio", obtenerArticulosPrecio)

router.get("/search/nombre", obtenerArticulosBusqueda)

router.get("/search/disponible", obtenerArticulosDisponibles)

router.get("/search/administrador",[
    validarJWT,
    isAdministrador
], obtenerArticulosPorAdministrador)

router.post("/", [
    validarJWT,
    isAdministrador,
    body("stock").isNumeric(),
    body("precio").isDecimal(),
    validarCampos
], crearArticulo)

router.put("/:id",[
    validarJWT,
    isAdministrador,
    param("id").custom(existeArticuloPorId),
    body("stock", "El stock debe ser un número").isNumeric().optional(),
    body("precio", "El precio debe ser un número").isDecimal().optional(),
    validarCampos
], actualizarArticulo)

router.delete("/:id",[
    validarJWT,
    isAdministrador,
    param("id").custom(existeArticuloPorId),
    validarCampos
], eliminarArticulo)

module.exports = router;