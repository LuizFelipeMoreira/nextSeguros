export default function horarioFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");

const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
const horario = funcionamento.dataset.hora.split(",").map(Number);

const data = new Date();
const dia = data.getDay();
const hora = data.getHours();
console.log(hora);
const verificaDia = diaSemana.includes(dia);
const verificaHorario = hora >= horario[0] && hora < horario[1];

if (verificaDia && verificaHorario) {
  console.log("aberto");
  funcionamento.classList.add("aberto");
}
// } else {
//   funcionamento.classList.remove("aberto");
// }
