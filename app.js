const express = require("express");
const bodyParse = require("body-parser");
const route = require("./src/Rutas/Rutas");
const rutasUsuario = require("./src/Rutas/Rutas");
const app = express();

app.use(bodyParse.urlencoded({ extended:true }));
app.use(bodyParse.json());
app.use(route);
app.use(rutasUsuario);

module.exports = app;
