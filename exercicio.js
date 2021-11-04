const chalk = require('chalk');
const comunicacaoPerdida = (resolve, reject) => {
    const tempoAleatorio = Math.ceil(Math.random() * 5000);
    
    console.log(tempoAleatorio);
    
    setTimeout(() => {
      if (tempoAleatorio <= 2500)
        resolve('Ok, todos vivos na estação');
      else
        reject('Comunicação perdida');
    }, tempoAleatorio);
  }
  const minhaPromessa = new Promise(comunicacaoPerdida)
  .then((msgSucesso) => console.log(chalk.red`Sucesso: ${msgSucesso}`))
  .catch((msgFalha) => console.log(`Falha: ${msgFalha}`));