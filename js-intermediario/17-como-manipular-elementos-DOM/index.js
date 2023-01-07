function postarPesamento() {
  const inputPensamento = document.getElementById("pensamento");
  const areaPensamentos = document.getElementById("area-pensamentos");

  let pensamentoDigitado = inputPensamento.value;

  areaPensamentos.innerHTML += `<p>Pensamento: ${pensamentoDigitado}</p>`; // innerhtml => html interno.area-pensamentos

}