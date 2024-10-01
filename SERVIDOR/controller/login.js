const executeQuery = require('../helpers/queryHelper');
module.exports = class {

  static loggedIn(req, res) {

    //
    res.renderice('index.html', {});
  }

  static async login(req, res) {

    try {
      res.renderice('index.html');
    } catch (err) {
      return res.error(err)
    }
  }


  static logout(req, res) {
    //if (!req.session) return res.status(400).json({type: 'error', message: "OK"})
    res.clearCookie('token');
    if (!req.session) return res.redirection()
    req.session.destroy(err => {
      //if (err) return res.status(500).json({type: 'error', message: "Se presento un error"})
      if (err) return res.redirection()
      //res.status(200).json({message: "Se ha cerrado la sesión"})
      res.redirection()
    })
  }


  static Pagina_Registro_usuario(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('RegistroUsuario.html', {});
  }

  static Pagina_iniciar_sesion(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('inicioSesion.html', {});
  }

  static Pagina_Registro_trabajador(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('ResgistroTrabajador.html', {});
  }

  static Pagina_Cambio_contrasena(req, res) {
    if (!req.session.user) return res.renderice('inicioSesion.html', {});
    //res.renderice('RegistroUsuario.html', {});
    res.renderice('CambioContraseña.html', {});
  }

  static Pagina_Consultar_producto(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('ConsultaProductos.html', {});
  }

  static Pagina_carrito_compras(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('CarritoCompras.html', {});
  }

  static async Cambio_contrasena(req, res) {
    try {
      const {password_nueva} = req.body;
      const sql = `UPDATE usuarios SET password = '${password_nueva}' WHERE usuario = '${req.session.user}'`;


      await executeQuery(sql);
      res.success('Contraseña actualizada');
    } catch (err) {
      res.error('Error al obtener usuarios', 500, {error: err.message});
    }
  }

  static Pagina_chat_linea(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('Chat_Linea.html', {});
  }

  static Pagina_stock(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('Stock.html', {});
  }

  static Pagina_venta_cobro(req, res) {

    //res.renderice('RegistroUsuario.html', {});
    res.renderice('VentaCobro.html', {});
  }

}