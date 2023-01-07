let pessoas = [
  {
    nome: 'Lucas',
    idade: 19
  },
  {
    nome: 'Pedro',
    idade: 18
  },
  {
    nome: 'Marcos',
    idade: 15
  }
];

// let maioresDeIdade = [];

// for(let i = 0; i < pessoas.length; i++) {
//   if(pessoas[i].idade >= 18) {
//     maioresDeIdade.push(pessoas[i]);
//   }
// }

// let pessoasMaioresDeIdade = pessoas.filter(function(pessoa) {
//   return pessoa.idade >= 18;
// });

let pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.table(pessoasMaioresDeIdade);