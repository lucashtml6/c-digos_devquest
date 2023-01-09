const mensagem = (msg, tempo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(msg);
  }, tempo * 1000);
});

// mensagem('Conectado com Banco de Dados', 2)
//   .then(res => {
//     console.log(res);
//     return mensagem('Dados buscados', 3);
//   })
//   .then(res => {
//     console.log(res);
//     return mensagem('Dados Tratados', 5);
//   })
//   .then(res => {
//     console.log(res);
//     return mensagem('Dados Exibidos', 1);
//   })
//   .then(res => console.log(res));

const interacaoBD = async () => {
  const conectarBD = await mensagem('Conectado com Banco de Dados', 2);
  console.log(conectarBD);

  const dadosBase = await mensagem('Dados buscados', 3);
  console.log(dadosBase);

  const tratarDados = await mensagem('Dados tratados', 5);
  console.log(tratarDados);

  const exibeDados = await mensagem('Dados exibidos', 1);
  console.log(exibeDados);

}

interacaoBD();



// const searchUF = async () => {
//   const res = await fetch('asdsa');

//   const data = await res.json;

//   const fkdj = await setUF(data.map((obj) => {
    
//   }))
// }