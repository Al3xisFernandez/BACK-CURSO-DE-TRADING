const express = require("express");
const bodyParser = require("body-parser");
const Rutas = require("./src/Rutas/Rutas");
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(Rutas);

module.exports = app;
