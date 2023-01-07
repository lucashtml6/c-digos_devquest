// 'use strict'

console.log(this); // window => escopo global
console.log(this === window); // true

var nome = 'Lucas';
console.log(this.nome);

function saudar() {
  console.log('This no contexto da função: ', this); 
  console.log('Olá, ', this.nome); // o contexto global está meio que vazando para dentro da função, para converter isso, usamos o 'use strict' na primeira linha do nosso código
  // o this da função não é o mesmo this do contexto global
}

// o this também pode existir no contexto de um método
let comida = {
  nome: 'Brócolis',
  temperatura: 0
}

// comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
//   comidaParaCozinhar.temperatura = temperaturaDeCozimento;
// }

// podemos fazer de uma maneira diferente, pois sabemos que quando o this está no contexto de um objeto, ele vira aquele próprio objeto

comida.cozinhar = function(temperatura) {
  this.temperatura = temperatura; // como se eu fizesse comida.temperatura = temperatura (que veio do parâmetro)
}
  
cozinhar(100);