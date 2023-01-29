const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://alexis:alexis50@cluster0.k6l1zwl.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));