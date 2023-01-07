const mensagemDelay = (nome) => {
  setTimeout(() => {
    console.log(`Olá, ${nome}.`)
  }, 5000);
}

mensagemDelay('Lucas');

// setInterval(() => {
//   console.log('Executando após se passar 1 segundo...');
// }, 1000);

const cronometro = (time) => {
  let cont = 10;

  const idInterval = setInterval(() => {
    console.log(cont);
    if(cont === 0) {
      clearInterval(idInterval);
    }

    cont--;
  }, time);
}

cronometro(1000);
