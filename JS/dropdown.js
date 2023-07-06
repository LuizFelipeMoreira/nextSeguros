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
  const clicou = "data-clicou";
  if (!element.hasAttribute(clicou)) {
    html.addEventListener("click", clicouFora);
    element.setAttribute(clicou, "");
  }
  function clicouFora(event) {
    console.log("clicou");
    if (!element.contains(event.target)) {
      element.removeAttribute(clicou);
      html.removeEventListener(evento, clicouFora);
      callback();
    }
  }
}
