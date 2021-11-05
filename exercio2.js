const chalk = require("chalk");
const temperatura_paciente = (resolve, reject) => {
  const temperatura = Math.random() * (40 - 36) + 36;

  const temp = temperatura.toFixed(1);

  console.log(temp);

  setTimeout(() => {
    if (temp > 37.5) resolve("paciente febril");

    else reject("paciente-nao-febril");
  }, 3000);

};
const minhaPromessa = new Promise(temperatura_paciente)
  .then((msgSucesso) => console.log(chalk.red`[ALERTA] ${msgSucesso}`))

  .catch((msgFalha) => console.log(chalk.green`[INFO] ${msgFalha}`));
