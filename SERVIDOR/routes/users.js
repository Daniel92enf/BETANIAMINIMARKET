const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.js');
const {validateLogin} = require('../validators')
//Rutas
router.get("/", loginController.loggedIn)
router.get("/Registro_usuario", loginController.Pagina_Registro_usuario)
router.get("/inicar_sesion", loginController.Pagina_iniciar_sesion)
router.get("/Chat_Linea", loginController.Pagina_chat_linea)
router.get("/Registro_trabajador", loginController.Pagina_Registro_trabajador)
router.get("/Stock", loginController.Pagina_stock)
router.get("/venta_cobro", loginController.Pagina_venta_cobro)
router.get("/Consultar_productos", loginController.Pagina_Consultar_producto)
router.get("/carrito_compras", loginController.Pagina_carrito_compras)
router.get("/Cambio_contrasena", loginController.Pagina_Cambio_contrasena)
router.post("/Cambio_contrasena", loginController.Cambio_contrasena)
router.post("/inicar_sesion",validateLogin, loginController.login)
router.get("/logout", loginController.logout)

module.exports = router;