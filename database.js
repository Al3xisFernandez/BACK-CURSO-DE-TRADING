const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/dbprueba";

mongoose.connect(url, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("bd conectada");
});
