// const soma = function(a, b) {
//   return a + b;
// }

// para casos de uma linha no bloco da função
const somar = (a, b) => a + b; 
console.log(somar(2, 3));

// para casos sem parâmetro 
const mensagem = () => console.log('Olá mundo!');
mensagem();

// para casos com um parâmetro
const incentivarQuester = nomeQuester => console.log(`Parabéns, ${nomeQuester}`);
incentivarQuester("Lucas");   

// mais de uma linha no bloco da função
const verificarMaiorDeIdade = idade => {
  if(idade >= 18)
    return true;
  else
    return false;

  // idade >= 18 ? return true : return false;
}

console.log(verificarMaiorDeIdade(18));