// function somar(a, b) {
//   return a + b;
// }

// const soma = somar(2, 2);
// console.log(soma);

const soma = function(a, b) { // a variável armazena uma função
  return a + b;
}

// a função não tem um nome, mas está sendo atribuida à variável soma e eu posso utilizá-la como tal

console.log(soma); // [Function: soma]

console.log(soma(2, 2)); // posso passar valores assim, pois agora minha variável é uma função