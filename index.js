require("./database");

const app = require("./app");

const main = () => {
  app.listen(8000, () => console.log("servidor conectado"));
};
main();
