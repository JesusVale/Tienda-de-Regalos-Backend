const { Router } = require("express")
const { crearArticulo,
        obtenerArticulos,
        obtenerArticulo,
        obtenerArticulosPrecio,
        obtenerArticulosBusqueda,
        obtenerArticulosDisponibles,
        actualizarArticulo,
        eliminarArticulo 
    } = require("../controllers/articulo")
const validarJWT = require("../middlewares/validar-jwt")

const router = Router()

router.get("/", obtenerArticulos)

router.get("/:id", obtenerArticulo)

router.get("/search/precio", obtenerArticulosPrecio)

router.get("/search/nombre", obtenerArticulosBusqueda)

router.get("/search/disponible", obtenerArticulosDisponibles)

router.post("/", [
    validarJWT
], crearArticulo)

router.put("/:id",[
    validarJWT
], actualizarArticulo)

router.delete("/:id", eliminarArticulo)

module.exports = router;