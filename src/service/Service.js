const User = require("../model/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "JDFHDFYGSDGSIGIFEMFPEFOIHEOEP514111654W64WOKPOWWPEOHOEHOGHPEOIDOFJOJ";
const Service = async (req, res) => {
  const encrytedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
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
};
const ServiceLogin = async () => {
  const user = await User.findOne({ email });
  if (!user) {
    res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "10m",
    });
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
};

const ServiceData = (token) => {
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "Token Expired";
      }
      return res;
    });
    console.log(user);
    if (user === "Token Expired") {
      return res.json({ status: "error", data: "Token Expired" });
    }
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
};

module.exports = { Service, ServiceLogin, ServiceData };
