export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", mouseOver);
  });

  function mouseOver(event) {
    const tooltipBox = criarTooltip(this);

    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";

    mouseLeave.tooltipBox = tooltipBox;
    mouseMove.tooltipBox = tooltipBox;

    this.addEventListener("mouseleave", mouseLeave);
    this.addEventListener("mousemove", mouseMove);
  }

  const mouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  const mouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
    },
  };

  function criarTooltip(element) {
    const div = document.createElement("div");
    div.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    div.innerText = text;
    document.body.appendChild(div);
    return div;
  }
}
