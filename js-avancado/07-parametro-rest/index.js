// const sum = (...numbers) => numbers.reduce((aux, number) => aux + number, 0);
// console.log(sum(2, 4, 6, 8));

// const mensagem = (...nomeQuesters) => console.log(nomeQuesters.map(nomeQuester => `Olá ${nomeQuester}`));
const mensagem = (...nomeQuesters) => nomeQuesters.map(nomeQuester => console.log(`Olá ${nomeQuester}`));
mensagem('Lucas', 'Pedro', 'João', 'Gabriel');