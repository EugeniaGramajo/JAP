const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

// Escribe el código necesario aquí
const div = document.getElementById("container");

let info = "";

DATA.map((e) => {
  info += `
  <p>${e.name} ${e.lastname}</p>
  `
});

div.innerHTML = info;