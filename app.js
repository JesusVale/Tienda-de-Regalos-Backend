require('dotenv').config()

const conectarBD = require("./config/db")
const {
    compraDAO,
    articuloDAO,
    carritoDAO,
    comentarioDAO,
    envioDAO,
    usuarioDAO
} = require("./dataAccess");
const Articulo = require("./models/articulo");
const Usuario = require("./models/usuario");

/*

    PARA QUE FUNCIONE EL CORRECTO:
    1. Correr comando npm i para instalar paquetes
    2. Crear archivo .env para la url de mongo, tomar como ejemplo el example env

*/

async function main(){
    await conectarBD();
}

async function pruebaUsuarioDAO(){
    /*const usuario = await usuarioDAO.crearUsuario({
        nombre: "Royal",
        tipo: "Usuario",
        email: "royal@mail.com",
        password: "123456667",
        telefono: "64498265312"
    });

    console.log(usuario);*/

    /*const usuario = await usuarioDAO.obtenerUsuarioPorId("65248a9cb93c88564cf31953");
    console.log(usuario);*/

    /*const usuario = await usuarioDAO.obtenerUsuarioPorCorreo("royal@mail.com");
    console.log(usuario);*/

    /*const usuario = await usuarioDAO.obtenerUsuarioPorId("65248a9cb93c88564cf31953")
    const usuarioActualizado = await usuarioDAO.actualizarUsuario("65248a9cb93c88564cf31953", {
        ...usuario,
        email: "nuevoEmail@gmail.com"
    })
    console.log(usuarioActualizado);*/

    /*const usuario = await usuarioDAO.eliminarUsuario("65248a9cb93c88564cf31953");
    console.log(usuario);*/
}

async function pruebaArticuloDAO(){
    
    // Pruebas ArticuloDAO
    //Crear Articulo
    /*const articulo = await articuloDAO.crearArticulo({
        nombre: "PS5",
        descripcion: "Consola de Videojuegos",
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nintendolife.com%2Fnews%2F2018%2F07%2Fthe_nintendo_switch_is_headed_to_turkey_but_will_cost_customers_almost_usd500%2Fattachment%2F0%2Foriginal.jpg&f=1&nofb=1&ipt=b1323bc335ca753e3e8e735086bd2a99b6666543eaf5d8670941902d3f68b7e5&ipo=images",
        precio: 8500,
        stock: 20,
        direccion: {
            calle: "Red Street",
            ciudad: "Obregon",
            codigo_postal: 85103,
            colonia: "Casa",
            numero_exterior: 3232
        },
        administrador: "65209bfb422388928f7138ba"
    })

    console.log(articulo);*/

    //Obtener Articulos

    /*const articulos = await articuloDAO.obtenerArticulos(2);
    console.log(articulos)*/

    //Obtener Articulo

    /*const articulo = await articuloDAO.obtenerArticuloPorId("6520a5241ff6ccf0da1030be");
    console.log(articulo);

    //Actualizar Articulo
    const nuevoArticulo = await articuloDAO.actualizarArticulo("6520a5241ff6ccf0da1030be", {
        ...articulo,
        precio: 3500
    })

    console.log(nuevoArticulo);*/

    //Obtener Articulos por articulo

    /*const articulos = await articuloDAO.obtenerArticulosPorPrecio({ min: 1000, max: 4000 })
    console.log(articulos);*/

    //Eliminar Articulo

    /*const articulo = await articuloDAO.eliminarArticulo("6520a5905ebfaea1792a877f");
    console.log(articulo);*/

    //Obtener Articulos Disponibles

    /*const articulos = await articuloDAO.obtenerArticulosDisponibles();
    console.log(articulos);*/

    //Obtener Articulos por Busqueda

    /*const articulos = await articuloDAO.obtenerArticulosPorBusqueda("Nintendo")
    console.log(articulos)*/

}

async function pruebaComentarioDAO(){
    /*const comentario = await comentarioDAO.crearComentario({
        usuario: "65209bfb422388928f7138ba",
        articulo: "6520a5241ff6ccf0da1030be",
        descripcion: "Me vino roto, le pongo 1 porque no puedo poner 0",
        rating: 1
    })
    
    console.log(comentario)*/

    /*const comentarios = await comentarioDAO.obtenerComentariosPorArticulo("6520a5241ff6ccf0da1030be");
    console.log(comentarios);*/

    /*const comentario = await comentarioDAO.eliminarComentario("65249e52594a48802a8651d7");
    console.log(comentario);*/
}

async function pruebaCompraDAO(){
    /*const compra = await compraDAO.crearCompra({
        usuario: "65209bfb422388928f7138ba",
        metodo_pago: "Debito",
        total: 500.50,
        direccion: {
            calle: "Nombre calle",
            colonia: "Nombre colonia",
            ciudad: "Obregón",
            codigo_postal: 45678,
            numero_exterior: 4321
        },
        articulos: [
            "6520a2bae0ea3b55f8c6d98a",
            "6520a5241ff6ccf0da1030be",
            "6520ac56bf28ab82ca999f8b"
        ]
    })

    console.log(compra);*/

    /*const compras = await compraDAO.obtenerCompraPorUsuario("65209bfb422388928f7138ba");

    console.log(compras);*/
}

async function pruebaEnvioDAO(){
    /*const envio = await envioDAO.crearEnvio({
        fechaLlegadaEstimada: "2023-10-09",
        fechaSalida: "2023-10-10",
        costo: 200,
        articulo: "6520a2bae0ea3b55f8c6d98a",
        usuario: "65209bfb422388928f7138ba",
        estado: "En camino",
        partida: {
            calle: "Nombre calle",
            colonia: "Nombre colonia",
            ciudad: "Obregón",
            codigo_postal: 45678,
            numero_exterior: 4321
        },
        destino: {
            calle: "Calle Destino",
            colonia: "Colonia destino",
            ciudad: "New York",
            codigo_postal: 43278,
            numero_exterior: 7777
        }
    })

    console.log(envio);*/

    /*const envio = await envioDAO.obtenerEnvioPorId("6524915bac08a3aee7530a3c");
    console.log(envio);*/

    /*const envio = await envioDAO.obtenerEnvioPorId("6524915bac08a3aee7530a3c");
    const envioActualizado = await envioDAO.actualizarEnvio("6524915bac08a3aee7530a3c", {
        ...envio,
        estado: "Entregado"
    })
    console.log(envioActualizado);*/

    /*const envios = await envioDAO.obtenerEnvioPorUsuario("65209bfb422388928f7138ba");
    console.log(envios);*/

    /*const envios = await envioDAO.obtenerEnviosRecientes("65209bfb422388928f7138ba");
    console.log(envios);*/
}

async function pruebaCarritoDAO(){
    /*const carrito = await carritoDAO.agregarArticuloCarrito({
        usuario: "65209bfb422388928f7138ba",
        articulo: "6520a2bae0ea3b55f8c6d98a"
    })
    console.log(carrito);*/

    /*const carritoNuevo = await carritoDAO.actualizarArticuloCarrito({
        usuario: "65209bfb422388928f7138ba",
        articulo: "6520a2bae0ea3b55f8c6d98a",
        
    }, 2)
    console.log(carritoNuevo);*/

    /*const carritoUsuario = await carritoDAO.obtenerCarritoPorUsuario("65209bfb422388928f7138ba");
    console.log(carritoUsuario);*/

    /*const carrito = await carritoDAO.eliminarArticuloCarrito({
        usuario: "65209bfb422388928f7138ba",
        articulo: "6520a2bae0ea3b55f8c6d98a"
    })
    console.log(carrito);*/
}

main();