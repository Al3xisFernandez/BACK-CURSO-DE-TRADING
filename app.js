const express = require("express");
const bodyParse = require("body-parser");
const route = require("./src/Rutas/Rutas");
const app = express();

app.use(bodyParse.urlencoded({ extended:false }));
app.use(bodyParse.json());
app.use(route);
module.exports = app;
