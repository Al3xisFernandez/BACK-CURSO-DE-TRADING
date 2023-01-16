const mongoose = require("mongoose");
 const url ="mongodb://localhost/dbprueba";
  mongoose.connect(url, {useNewUrlParser: true});

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("bd conectada");
  });