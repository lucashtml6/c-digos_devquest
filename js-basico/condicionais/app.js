const nomeFilme = "Vingadores";

nomeFilme === "Vingadores" ? console.log("É o filme dos vingadores") : console.log("É outro filme");

// condição ? executa se for true : executa se for false

switch (nomeFilme) {
  case "Vingadores":
    console.log("É o filme dos vingadores");
    break; // sair
  case "Batman":
    console.log("É o filme do Batman");
    break;
  case "Clube da Luta":
    console.log("É o filme Clube da Luta");
    break;
  default:
    console.log("É outro filme");
    break;
}

// isso é equivalente à

if (nomeFilme === "Vingadores") {
  console.log("É o filme dos vingadores");  
} else if (nomeFilme === "Batman") {
  console.log("É o filme do Batman");
} else if (nomeFilme === "Clube da Luta") {
  console.log("É o filme Clube da Luta");
} else {
  console.log("É outro filme");
}

// multicaso
const avaliacao = Number(prompt("Digite a nota do filme: "));

switch(avaliacao) {
  case 1: // caso for 1 ou 2
  case 2:
    alert("Filme Ruim");
    break;
  case 3: // caso for 3, 4 ou 5
  case 4:
  case 5:
    alert("Filme Médio");
    break;
  case 6: // caso for 6 ou 7
  case 7:
    alert("Filme Bom");
    break;
  case 8: // caso for 8, 9 ou 10
  case 9:
  case 10:
    alert("Filme Excelente");
    break;
  default: // caso não seja nenhuma das opções acima
    alert("Nota inválida");
    break;
}