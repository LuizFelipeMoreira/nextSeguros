export default function perguntaFrequente() {
  const perguntas = document.querySelectorAll(".perguntas-lista dt");
  function mostrarResposta() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", mostrarResposta);
  });
}
