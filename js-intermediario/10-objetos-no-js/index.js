let pessoa = {
  nome: 'Lucas', // propriedade
  idade: 19,
  fazFaculdade: true
}

// conseguimos acessar as propriedades desse objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.fazFaculdade);

// posso faz fazer dessa maneira também
console.log(pessoa['nome']);
console.log(pessoa['idade']);
console.log(pessoa['fazFaculdade']);

// posso adicionar novas propriedades para o meu objeto
pessoa.altura = 1.79;
console.log(pessoa);