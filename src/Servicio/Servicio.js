const { response } = require("../../app");
const Usuario = require("../Modelo/Usuario");

const Servicio = async (usuario, contraseña, nombre) => {
    try {
        const id = Math.ramdon();
        await Usuario.create({ usuario, contraseña, nombre });
        return true;
    } catch (error) {
        return false;
    }
}
const ActualizarUsuario = async (usuario, contraseña, nombre) => {
    try{
        await  Usuario.updateOne(
            {usuario : `${usuario}`},
            {contraseña,
             nombre
        });
        if(response.modifiedCount > 0){
            return true;
        }
    } catch(error){
        return false;
    }
}
const EliminarUsuario = async (username) => {
    try{
        const response = await Usuario.deleteOne({usuario : `${usuario}` });
        if(response.deleteCount > 0){
            return true;
        }else {
            return false;
        }
    }catch(error){
        return false;

    }
}


module.exports = {Servicio, ActualizarUsuario, EliminarUsuario};

