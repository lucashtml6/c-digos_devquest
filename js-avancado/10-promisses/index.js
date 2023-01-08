const myPromise = new Promise((resolve, reject) => {
  const nome = 'João'; // nome que veio de uma requisição por exemplo

  if(nome === 'Lucas') {
    resolve('Usuário Lucas encontrado!');
  } else {
    reject('O usuário Lucas não foi encontrado');
  }
});

console.log(myPromise);
