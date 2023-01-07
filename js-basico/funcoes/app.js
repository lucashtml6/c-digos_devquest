/*
  function nomeDaFuncao(parametros) {
    <bloco da execução>
  }

  nomeDaFunção(parâmetros); // para chamar a função
 */

const primeiroValor = Number(prompt("Digite o primeiro valor: "));
const segundoValor = Number(prompt("Digite o segundo valor: "));

function somarDoisValores(primeiroValor, segundoValor) {
  let soma = primeiroValor + segundoValor;
  return soma;
} 

alert(somarDoisValores(primeiroValor, segundoValor));

/*
  Parâmetro: é a variável que irá receber o valor em uma função
  Argumento: é que você passa para a função

  function multiplicaDoisValores(a, b) { // a e b são parâmetros
    return a * b;
  }

  multiplicaDoisValores(4, 5); // 4 e 5 são os argumentos
*/

// parâmetros default

function incentivarQuester(nome="Quester") {
  alert(`Parabéns ${nome}, você chegou muito longe!`);
}

incentivarQuester(); // incentivarQuester("Quester"); caso eu não passar nada, ele usará "Quester"
incentivarQuester("Lucas");

