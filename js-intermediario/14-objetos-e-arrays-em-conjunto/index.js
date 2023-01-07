// posso colocar um array dentro de um objeto
let videoGames = {
  nome: 'Xbox',
  valor: 3000,
  jogos: ['Fifa', 'GTA', 'Minecraft']
}

// também posso ter um array de objetos dentro de um objeto
let computadorGamer = {
  nome: 'PC Gamer',
  valor: 5000,
  jogos: [
    { // ja coloco os objetos mas sem instânciá-los. Poderia também instanciar cada um e depois só colocar o nome no array
      nome: 'Valorant',
      compatibilidade: true,
      estilo: 'FPS'
    },
    {
      nome: 'Minecraft',
      compatibilidade: true,
      estilo: 'Construção/sobrevivência'
    }
  ]
}

console.log(computadorGamer.jogos[0].nome); // valorant

// posso ter também um objeto dentro de outro objeto
let cliente = {
  nome: 'Roberto',
  id: 45489,
  ultimoPedido: { // objeto 
    produto: 'PlayStation',
    valor: 4000,
    idProduto: 45879,
    jogos: [ // array de objetos
      {
        nome: 'Minecraft',
        compatibilidade: true,
        estilo: 'Construção/sobrevivência'
      },
      {
        nome: 'Fifa',
        compatibilidade: true,
        estilo: 'Futebol'
      }
    ]
  } 
}

console.log(cliente.ultimoPedido.jogos[1].nome); // Fifa