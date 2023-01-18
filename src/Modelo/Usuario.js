const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id:{
        type: String,
        required: true 
    },
    usuario:{
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: false
    }
}, {collection:"Usuarios"});
module.exports = mongoose.model("Usuario", usuarioSchema);
