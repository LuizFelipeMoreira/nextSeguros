export default function initModal() {
  const modalContainer = document.querySelector("[data-modalContainer]");
  const modal = document.querySelector("data-modal");
  const botaoFechar = document.querySelector("[data-fechar]");
  const cadastrar = document.querySelector("[data-cadastro]");

  function abrirModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    modalContainer.classList.remove("ativo");
  }

  function clicarFora(event) {
    if (event.target === this) fecharModal(event);
  }

  cadastrar.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);
  modalContainer.addEventListener("click", clicarFora);
}
