const Usuario = require("../model/Usuario");
const crypto = require("crypto");

const seleccionTodaListaServicio = async () => {
  try {
    return await Usuario.find({}).select("-__v").select("-_id");
  } catch (error) {
    return false;
  }
};
const seleccionUnoListaServicio = async (id) => {
  try {
    return await Usuario.find({ id }).select("-__v").select("-_id");
  } catch (error) {
    return false;
  }
};
const actualizarUsuarioServicio = async (id,email, passsword) => {
  try {
    const response = await Usuario.updateOne({ id : `${id}` }, { email, passsword });
    if (response.modifiedCount > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
const guadarUsuarioServicio = async (email, passsword) => {
  try {
    const id = crypto.randomUUID();
    await Usuario.create({
      id,
      email, 
      passsword
    });
    return id;
  } catch (error) {
    return false;
  }
};
const eliminarUsuarioServicio = async (id) => {
  try {
    const resultado = await Usuario.deleteOne({ id });
    if (resultado.deleteCount > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  seleccionTodaListaServicio,
  seleccionUnoListaServicio,
  actualizarUsuarioServicio,
  guadarUsuarioServicio,
  eliminarUsuarioServicio,
};
