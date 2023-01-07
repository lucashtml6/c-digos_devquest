// Escopo -> visibilidade de uma variável, outras partes do meu código poderão acessar determinadas variáveis dependendo do tipo de escopo em que elas foram definidas

// Devo me perguntar, qual é o escopo da minha variável?

if(true) {
  const mensagem = 'Olá';
}

console.log(mensagem); // aqui não irá mostrar pois a variável mensagem só está visível no escopo do if

// =====================================================================================================
// Bloco de código autônomo
{
  const mensagem = "Hello World!";
  console.log(mensagem); // aqui irá mostrar
}

console.log(mensagem); // aqui não irá mostrar, pois a variável mensagem só está visível no escopo entre {}

{
  var nome = "Lucas";
  console.log(nome); // aqui irá mostrar 
}
console.log(nome); // aqui também irá mostrar

// O bloco de código não cria escopos para variáveis do tipo var
// =====================================================================================================

// =====================================================================================================
// Escopo de função (var, let e const)
// Só consigo acessar a variável dentro do escopo da função
function falar() {
  var nome = "Lucas";
  let idade = 19;
  const altura = 1.79;
}

// não irá mostrar nenhuma, pois tanto as variáveis do tipo let, var e const são visíveis apenas no escopo da função falar()
console.log(nome);
console.log(idade);
console.log(altura);
// =====================================================================================================

// =====================================================================================================
function falar() {
  const msg = "Olá Mundo!";
  console.log(msg);

  function falarOutraCoisa() {
    const msg2 = "Outra Mensagem";
    console.log(msg); // consigo acessar (escopo léxico)
  }

  console.log(msg2); // não consigo acessar
  falarOutraCoisa();
  console.log(falarOutraCoisa); // aqui imprime
}

falar();
console.log(falarOutraCoisa); // aqui não -> a função também só estará visível no escopo fa função falar(), na qual ela foi definida
// ===================================================================================================== 

// escopo global
let cpf = "08460168697";

function mostraCpf() {
  console.log(cpf);
}

mostraCpf();
console.log(url);

// ===================================================================================================== 
// posso redeclarar variáveis com o mesmo nome em escopos diferentes 
const nameDog = "Duque";

function sayNameDog() {
  const nameDog = "Toddy"; // mesmo nome (nameDog)
  console.log(nameDog);
}

sayNameDog(); // Toddy
console.log(nameDog); // Duque

// não posso redeclarar variáveis com o mesmo nome no mesmo escopo, mas em escopos diferentes sim


function external() {
  const book = "Sapiens";

  function internal() {
    const book = "Os Testamentos";

    function extraInternal() {
      console.log(book.toUpperCase())
    }

    extraInternal();
  }

  internal(); 
}

// vai sempre procurar no "escopo de cima"