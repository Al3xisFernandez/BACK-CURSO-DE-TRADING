const {
  Servicio,
  ActualizarUsuario,
  EliminarUsuario,
} = require("../Servicio/Servicio");

const Controlador = async (req, res) => {
  try {
    const { usuario, contraseña, nombre } = req.body;
    let response = await Servicio(usuario, contraseña, nombre);
    if (Response) {
      res.status(200).json({ response: "usuario creado exitosamente" });
    } else {
      res.status(400).json({ error: "error al crear usuario" });
    }
  } catch (error) {}
};
const ActualizarUsuariocontrol = async (req, res) => {
  try {
    const usuario = req.params.usuario;
    const { contraseña, nombre } = req.body;
    let response = await ActualizarUsuario(usuario, contraseña, nombre);
    if (response) {
      res.status(201).json({ response: "usuario actualizado exitosamente" });
    } else {
      res.status(400).json({ error: "error al actualizar usuario" });
    }
  } catch (error) {}
};

const EliminarUsuariovalidacion = async (req, res) => {
  try {
    const usuario = req.params.usuario;
    const response = await EliminarUsuario(usuario);
    if (response) {
      res.status(201).json({ response: "usuario eliminar exitosamente" });
    } else {
      res.status(400).json({ error: "error al eliminar usuario" });
    }
  } catch (error) {
    return false;
  }
};

module.exports = { Controlador, ActualizarUsuariocontrol, EliminarUsuariovalidacion };
