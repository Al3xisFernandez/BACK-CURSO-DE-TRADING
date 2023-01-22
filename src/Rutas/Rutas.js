const { Router } = require("express");
const {
  seleccionTodaListaControlador,
  seleccionUnoListaControlador,
  guardarUsuarioControlador,
  actualizarUsuariocontrol,
  eliminarUsuarioControl,
} = require("../Controlador/Controlador");
const router = Router();
router.get("/usuario", seleccionTodaListaControlador);
router.get("/usuario/:id", seleccionUnoListaControlador);
router.post("/usuario", guardarUsuarioControlador);
router.put("/usuario/:id", actualizarUsuariocontrol);
router.delete("/usuario/:id", eliminarUsuarioControl);

module.exports = router;
