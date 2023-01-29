const { Service, ServiceLogin, ServiceData } = require("../service/Service");

const Controller = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const response = await Service(fname, lname, email, password);
  res.status(201).json({ response: response });
};
const ControllerLogin = async (req, res) => {
  const { email, password } = req.body;
  const response = await ServiceLogin(email, password);
  res.status(201).json({ response: response });
};

const ControllerData = async (req, res) => {
    const {token} = req.body;
    const response = await ServiceData(token);
    res.status(201).json({ response: response });



}
module.exports = { Controller, ControllerLogin, ControllerData };
