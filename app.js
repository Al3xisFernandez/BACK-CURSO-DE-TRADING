const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_SECRET= "JDFHDFYGSDGSIGIFEMFPEFOIHEOEP514111654W64WOKPOWWPEOHOEHOGHPEOIDOFJOJ";

const mongoUrl =
  "mongodb+srv://alexis:alexis50@cluster0.k6l1zwl.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));
require("./userDetail");

const User = mongoose.model("UserInfo");
//api de registro
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encrytedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encrytedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
//api de login
app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  //verificando si el usuario existe o no
  const user = await User.findOne({ email });
  if(!user){
    return res.json({ error: "User Not Found" });
  }
  //verificando la contraseña comparando
  if( await bcrypt.compare(password, user.password)){
    const token = jwt.sign({email: user.email}, JWT_SECRET, {
      expiresIn: "1h",
    }) ;
    //aqui  muesta el status de como sallo el login
    if(res.status(201)){
      return res.json({ status : "ok", data:token});
    }else{
      return res.json({ error : "error"});
    }
  }
  res.json({ status : "error", error: "Invalid Password"});
});
//api data
app.post("/userdata", async (req, res) =>{
  const {token} = req.body;
  let error = null;
  try{
    const user = jwt.verify(token, JWT_SECRET, (err, res)=>{
      if(err){
        error = "Token Expired";
      }
      return res;
    });
    console.log(user);
    if(user==="token expired"){
      return res.json({status})
    }
    const useremail = user.email;
    User.findOne({email : useremail}).then((data) =>{
      res.send({ status: "ok", data: data});
     })
     .catch((error) => {
      res.send({ status: "error", data: error});
     });
  } catch (error){}
});



app.listen(5000, () => {
  console.log("server is running");
});
