// Objetos
let pessoa = {
  nome: "Lucas",
  idade: 19,
  sobrenome: "Silva"
}

let { nome: nome, idade: idade, sobrenome: sobrenome} = pessoa;

console.log(nome); // Lucas
console.log(idade); // 19
console.log(sobrenome); // Silva

// Arrays

const arr = [0, 1, 2];

let [ zero, um, dois ] = arr;

console.log(zero); 
console.log(um); 
console.log(dois); 