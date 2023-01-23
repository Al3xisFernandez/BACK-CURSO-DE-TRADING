const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contraseña: {
      type: String,
      required: false,
    },
  },
  { collection: "Usuarios" }
);
module.exports = mongoose.model("Usuario", usuarioSchema);
