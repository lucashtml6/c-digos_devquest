const titulos = document.getElementsByClassName("title");

function mudarFundoPrimeiroTitulo() {
  const primeiroTitulo = titulos[0]; // pegar o primeiro título
  primeiroTitulo.style.backgroundColor = 'red';
}

function aumentarFonte() {
  const tituloGrande = titulos[1];
  tituloGrande.classList.add("fonte-grande"); // classList => lista as classes dos elementos
}

function marcarRadio(genero) {
  const radioMasc = document.getElementById("masculino");
  const radioFem = document.getElementById("feminino");

  genero === "M" ? radioMasc.checked = true : radioFem.checked = true;
}