const { Router } = require("express");
const Controlador = require("../Controlador/Controlador");
const router = Router();

router.get("/saludar", Controlador.metodoControlador);

module.exports = router;

