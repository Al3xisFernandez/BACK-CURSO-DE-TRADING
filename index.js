const app = require("./app");

async function main() {
  await app.listen(8000, () => {
    console.log("servidor conectado")})
}
main();
