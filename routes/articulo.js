const { Router } = require("express")
const { crearArticulo,
        obtenerArticulos,
        obtenerArticulo,
        obtenerArticulosPrecio,
        obtenerArticulosBusqueda,
        obtenerArticulosDisponibles,
        obtenerArticulosPorAdministrador,
        obtenerArticuloPorCategoria,
        obtenerArticuloPorRating,
        actualizarArticulo,
        eliminarArticulo 
    } = require("../controllers/articulo")
const validarJWT = require("../middlewares/validar-jwt")
const isAdministrador = require("../middlewares/is-administrador")
const { body, param, query } = require("express-validator")
const {validarCampos} = require("../middlewares/validar-campos")
const { categorias } = require("../constants")
const { existeArticuloPorId } = require("../helpers/db-validators")

const router = Router()

router.get("/", obtenerArticulos)

router.get("/:id", obtenerArticulo)

router.get("/search/precio", [

    validarCampos
], obtenerArticulosPrecio)

router.get("/search/nombre", obtenerArticulosBusqueda)

router.get("/search/disponible", obtenerArticulosDisponibles)

router.get("/search/administrador",[
    validarJWT,
    isAdministrador
], obtenerArticulosPorAdministrador)

router.get("/search/categoria/:categoria", [
    param("categoria", "La categoria no es válida").isIn(categorias),
    validarCampos
], obtenerArticuloPorCategoria)

router.get("/search/rating/:rating", [
    param("rating", "El rating debe ser un un número del 1 al 5").isInt(),
    validarCampos
], obtenerArticuloPorRating)

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