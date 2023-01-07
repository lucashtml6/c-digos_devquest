console.log(nome); // undefined
var nome = 'Lucas';

// o que acontece
var nome;
console.log(nome);
nome = 'Lucas';

console.log(pais); // erro de referência, pois a variável sofre o hoisting mas não é inicializada como undefined
let pais = 'Brasil';