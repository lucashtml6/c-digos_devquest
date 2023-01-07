const select = document.getElementById("estados");
const areaEstados = document.getElementById("area-estados");

select.addEventListener("change", () => {
  let valor = select.value;
  if(valor === "SP") {
    areaEstados.innerHTML = `O estado selecionado foi: São Paulo.`;
  } else if (valor === "MG") {
    areaEstados.innerHTML = `O estado selecionado foi: Minas Gerais.`;
  } else if (valor === "RJ") {
    areaEstados.innerHTML = `O estado selecionado foi: Rio de Janeiro`
  } else {
    areaEstados.innerHTML = `Por favor, selecione um estado`;    
  }
});

