let nomes = ['Lucas', 'Pedro', 'João', 'Marcos', 'Maurício'];

// slice => fatiar, não altera o array original
let nomesFatiados = nomes.slice(0, 2); // começa na posição 0 e PARA na 2, o elemento 2 não é incluído
console.log(nomesFatiados); // ['Lucas', 'Pedro']

console.log(nomes); // note que o array não foi alterado

console.log(nomes.slice(1)); // vai pegar da um e ir até o final

//splice => altera o array original (adicionar/remover elementos do meio do array)
let frutas = ['Maça', 'Laranja', 'Abacaxi', 'Mixirica', 'Uva'];

frutas.splice(1, 2); // remove ['Laranja', 'Abacaxi'] => 1 pos inicial, 2 qtd. elementos

console.log(frutas); // ['Maçã', 'Mixirica', 'Uva']

// posso também usar o splice como uma espécie de substituição
frutas.splice(0, 2, 'Melão', 'Banana', 'Laranja'); // remove ['Maçã', 'Mixirica'] e adiciona, começando na pos 0 ['Melão', 'Banana', 'Laranja']
console.log(frutas); // ['Melão', 'Banana', 'Laranja', 'Uva']

frutas.splice(1); // remove tudo a partir da pos 1
console.log(frutas);