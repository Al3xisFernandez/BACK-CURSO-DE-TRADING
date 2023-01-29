const {Router} = require("express");
const {Controller, ControllerLogin, ControllerData} = require("../controller/ControllerUser");
const router = Router();

router.post("/register", Controller);
router.post("loginuser", ControllerLogin);
router.post("/userdata", ControllerData)
module.exports = Router;
