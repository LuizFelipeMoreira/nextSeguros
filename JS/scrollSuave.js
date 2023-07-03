export default function scrollSuave() {
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
