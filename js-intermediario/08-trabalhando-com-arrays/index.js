// array é um objeto, consequentemente ele tem propriedades e métodos

let nomes = ['Lucas', 'Marcos', 'Paulo', 'Pedro'];

for(let i = 0; i < nomes.length; i++) { // length => tamanho do array, nesse caso é 4
  console.log(nomes[i]);
}

// podemos usar um método dos arrays que já consegue iterar 
// o forEach tem um callback que recebe o item, o indice e o array mas podemos simplificar usando apenas o item
nomes.forEach(item => {
  console.log(item); // cada item no array => frutas[i]
});

// alguns métodos dos arrays
let frutas = ['Banana', 'Uva', 'Melão', 'Laranja', 'Maracujá'];

// push
frutas.push('Pêra'); // vai ADICIONAR o elemento Pêra na última posição
console.log(frutas);

// pop
frutas.pop(); // vai REMOVER o último elemento do array
console.log(frutas);

// shift
frutas.shift(); // vai REMOVER o primeiro elemento do array
console.log(frutas);

// unshift
frutas.unshift('Melancia'); // vai ADICIONAR um elemento na primeira posição do meu array
console.log(frutas);

console.log(frutas.indexOf('Melancia')); // retorna a posição do item passado como argumento
   
console.log(frutas.indexOf('Carne')); // se o elemento não existir no array, vai retornar -1