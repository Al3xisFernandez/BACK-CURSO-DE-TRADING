require("./database");
const app = require("./app")

const main = () => {
  app.listen(5000, () => console.log("server listening on port"));
};
main();
