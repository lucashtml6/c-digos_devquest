// High Order Function => função que recebe uma outra função como parâmetro ou retorna outra função

// Passando outra função como parâmetro
const calcularAnoDeNascimento = (idade, mesDeNascimento, imprimirAnoDeNascimento) => {
  // calcula o ano de nascimento
  const mesAtual = 8;
  let anoDeNascimento = 2022 - idade;
  if(mesDeNascimento > mesAtual) {
    anoDeNascimento--;
  }

  // função
  imprimirAnoDeNascimento(anoDeNascimento); // quando chegar aqui => vai chamar a função imprimirAnoDeNascimento (linha 11)

  console.log(imprimirAnoDeNascimento); // irá imprimir a função
}

const imprimirAnoDeNascimento = anoDeNascimento => console.log('Seu ano de nascimento é: ' + anoDeNascimento); // a variável anoDeNascimento foi deifnida na linha 3

calcularAnoDeNascimento(19, 9, imprimirAnoDeNascimento);

// Retornando outra função
const multiplicar = multiplicador => { // const multiplicar = multiplicador => numero => multiplicador * numero;
  return function(numero) {
    return numero * multiplicador;
  }
}

let dobrar = multiplicar(2); // mutiplicar vai retornar a função (linha 24) e armazena-la na var dobrar
console.log(dobrar(3)); // 3 é o "numero", que é o parâmetro da função de retorno

let triplicar = multiplicar(3); // usamos a função multiplicar para criar as funções genéricas (dobrar, triplicar, etc)
console.log(triplicar(3));