import { newModal } from "./modal.js";
import { searchFunction } from "./search.js";
import { showStars } from "./stars.js";

const button = document.getElementById("btnBuscar");
let inputValue;
let resultSearch;
const lista = document.getElementById("lista");

button.addEventListener("click", async () => {
  resultSearch = null;
  lista.innerHTML = "";
  inputValue = document.getElementById("inputBuscar").value;
  resultSearch = await searchFunction({ value: inputValue });

  resultSearch.forEach((e) => {
    const section = document.createElement("section");
    section.innerHTML = `
    <div>
      <h4>${e.title}</h4>
      <p><em>${e.tagline}</em></p>
    </div>
    <div class="stars">
      ${showStars({ rate: e.vote_average })}
    </div>
  `;

    section.addEventListener("click", () => {
      const modal = document.getElementById("modal");
      modal.innerHTML = newModal(e);
      modal.style.display = "block";
    });
    lista.appendChild(section);
  });
});
