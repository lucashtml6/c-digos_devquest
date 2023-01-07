const itemFaq = document.querySelectorAll(".item");

itemFaq.forEach((item) => {
  item.addEventListener("click", (e) => {
    const itemAtualAtivo = document.querySelector(".ativo");
    console.log(e.target);

    if (itemAtualAtivo) {
      itemAtualAtivo.classList.toggle("ativo");
    }

    if (itemAtualAtivo === item) {
      e.classList.toggle("ativo");
    }

    item.classList.add("ativo");
  });
});
