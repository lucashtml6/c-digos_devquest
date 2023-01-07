// arays => é muito usados quando queremos manipular uma lista de valores
// objetos => agrupar informações sobre determinada entidade do mundo real

let videoGameUm = {
  nome: 'Xbox',
  valor: 3000.00
}

let videoGameDois = {
  nome: 'PlayStation',
  valor: 4000.00
}

let videoGames = [videoGameUm, videoGameDois]; // posso ter um array de objetos por exemplo

console.log(videoGames[0].nome);
console.log(videoGames[1].nome);