document.getElementById("buttonText").addEventListener("click", (e) => {
  localStorage.setItem("data", document.getElementById("inputText").value);
});
