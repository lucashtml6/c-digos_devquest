let pessoas = [
  {
    nome: 'Lucas',
    idade: 18
  },
  {
    nome: 'Pedro',
    idade: 25
  },
  {
    nome: 'João',
    idade: 15
  }
]; 

// let nomePessoas = [];

// for(let i=0; i < pessoas.length; i++) {
//   nomePessoas.push(pessoas[i].nome);
// }

let nomePessoas = pessoas.map(pessoa => pessoa.nome);
console.log(nomePessoas);

let valores = [1, 2, 4, 5, 6, 7, 8, 10];

let valoresDobrados = valores.map(valor => valor * 2);
console.log(valoresDobrados);