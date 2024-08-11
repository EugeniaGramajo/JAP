document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  const button = document.getElementById("highlightBtn");
  const p = document.getElementById("lorem");

  let resaltado = false;

  button.addEventListener("click", () => {
    if (resaltado) {
      p.classList.remove("highlight");
      resaltado = false;
    } else {
      p.classList.add("highlight");
      resaltado = true;
    }
  });
  //
});
