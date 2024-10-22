export const newModal = (e) => {
  console.log(e);
  return `<div class="modal">
    <h1>${e.title}</h1>
<button onclick="${closeModal()}">Cerrar</button>
    <p>${e.overview}</p>
    <p>
      ${e.genres.map((g) => {
        g.name;
      })}
    </p>
  </div>`;
};
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};
