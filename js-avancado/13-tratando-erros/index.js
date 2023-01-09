const mensagem = (msg, tempo) => new Promise((resolve, reject) => {
  if(typeof msg !== 'string') {
    throw('ERROR: type of "msg" is invalid.');
  }

  setTimeout(() => {
    resolve(msg);
  }, tempo * 1000);
});

const interacaoBD = async () => {
  try {
    const conectarBD = await mensagem('Conectado com Banco de Dados', 2);
    console.log(conectarBD);

    const dadosBase = await mensagem('Dados buscados', 3);
    console.log(dadosBase);

    const tratarDados = await mensagem(34, 5); // erro
    console.log(tratarDados);

    const exibeDados = await mensagem('Dados exibidos', 1);
    console.log(exibeDados);
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Processo finalizado!');
  }
}

interacaoBD();

