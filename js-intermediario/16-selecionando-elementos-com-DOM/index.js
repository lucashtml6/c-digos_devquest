// posso selecionar o body diretamente
console.log(document.body);

// selecionar por tag (mais de um elemento => retorna lista)
let span = document.getElementsByTagName("span");
console.log(span);

// selecionar pelo ID
let paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);

// selecionar pela classe 
let subtitulos = document.getElementsByClassName("subtitulo"); // vai retornar uma lista, pois com as classes eu posso selecionar mais de um elemento
console.log(subtitulos); 
// para acessar esses elementos basta colocar colchetes e o índice do elemento
console.log(subtitulos[0]);

// selecionando pelo atrtibuto name (também retorna uma lista)
let inputNome = document.querySelectorAll("input[name='nome']"); // qualquer elemento que for da tag input e tiver o atributo name="nome"
console.log(inputNome);