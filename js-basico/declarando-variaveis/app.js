var nome = "Lucas Souza e Silva";

nome = "Reinaldo Da Silva Pinto"; // posso modificar o valor da variável

var nome = "Cleiton de Souza"; // posso redeclarar

console.log(nome)

var idade;

idade = 49;

console.log(idade);

let peso = 39.5;

let foiAprovado; // posso não declarar nenhum valor

peso = 40; // posso modificar o valor da variável

// não posso redeclarar -> let peso = 40;

console.log(peso);

const nomeCliente = "Lucas Souza e Silva"; 

// não posso fazer isso -> const url;

// nomeCliente = "Reinaldo Da Silva Pinto"; -> não posso fazer isso


// {
//   var altura = 1.79;

//   const nomeRua = "Rua Mário Aleixo Caixeta";

//   let bairro = "Céu Azul";
// }

// console.log(altura);
// console.log(nomeRua);
// console.log(bairro);

// function soma() {
//   var n1 = 2;
// } 

// console.log(n1);

let continuar = window.confirm("Deseja continuar? ");

if(continuar === true) {
  console.log("O usuário deseja continuar!");
} else {
  console.log("O usuario não quer continuar!");
}

let cor = window.prompt("Qual cor deseja colocar? ");
console.log(cor);