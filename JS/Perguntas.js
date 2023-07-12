export default function perguntaFrequente() {
  const perguntas = document.querySelectorAll(".perguntas-lista dt");
  const eventos = ["touchstart", "click"];

  function mostrarResposta() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  perguntas.forEach((pergunta) => {
    eventos.forEach((userEvent) => {
      pergunta.addEventListener(userEvent, mostrarResposta);
    });
  });
}
