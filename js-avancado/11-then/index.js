const mensagem = (msg, tempo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(msg);
  }, tempo * 1000);
});

mensagem('Olá ', 3)
  .then(res => { // res == 'Olá'
    console.log(res); 
    return mensagem(`${res}Mundo`, 2); 
  }).then(res => { // res == 'Olá Mundo'
    console.log(res); 
    return mensagem(`${res}!!!!`, 1); 
  }).then(res => { // res == 'Olá Mundo!!!!'
    console.log(res);
    return console.log('Fim');
  });