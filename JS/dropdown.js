export default function initDropDown() {}

const dropDowns = document.querySelectorAll("[data-dropdown]");
const eventos = ["touchstart", "click"];

dropDowns.forEach((menu) => {
  eventos.forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
  this.classList.toggle("ativo");
  VerificaClicouFora(this, eventos, () => {
    this.classList.remove("ativo");
  });
}

function VerificaClicouFora(element, evento, callback) {
  const html = document.documentElement;
  html.addEventListener("click", clicouFora);
  function clicouFora(event) {
    if (!element.contains(event.target)) callback();
  }
}
