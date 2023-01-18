const {Router} = require("express");
const {Controlador, ActualizarUsuariocontrol, EliminarUsuariovalidacion} = require("../Controlador/Controlador");
const router = Router();

router.post("/usuario", Controlador);
router.put("/usuario/:nombre", ActualizarUsuariocontrol);
router.delete("/usuario/:nombre", EliminarUsuariovalidacion);

module.exports = router;

