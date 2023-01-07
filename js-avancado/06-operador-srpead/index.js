let arr = ['Lucas', 'Paulo', 'Rodrigo'];
console.log(...arr); // Lucas Paulo Rodrigo

// concatenando arrays
let arr1 = ['Lucas', 'Paulo'];
let arr2 = ['Pedro', 'Miguel'];
let arr3 = ['João', 'Rodrigo'];

arr1 = [ ...arr1, ...arr2, ...arr3];

// clonando objetos
let pessoa = {
  nome: 'Lucas',
  idade: 19,
  fazFaculdade: true
}

let pessoaClonada = { ...pessoa }

// funções
const newArr = [2, 4];

const soma = (a, b, c) => a + b + c;

soma(...newArr, 5); // a = 2 - b = 4 - c = 5