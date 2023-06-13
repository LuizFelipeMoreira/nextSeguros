function scrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"');
  function scrollar(link) {
    link.preventDefault();
    const id = link.currentTarget.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    console.log(section);
  }

  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollar);
  });
}

scrollSuave();

function perguntaFrequente() {
  const perguntas = document.querySelectorAll(".perguntas-lista dt");

  console.log(perguntas);

  function mostrarResposta() {
    this.nextElementSibling.classList.toggle("ativo");
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", mostrarResposta);
  });
}

perguntaFrequente();
