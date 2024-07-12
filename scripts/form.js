document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

//Listado de productos
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
//funcion para crear las opciones en el select del html
document.addEventListener("DOMContentLoaded", function () {
  //obtiene el selec del html a travez de su id
  const select = document.getElementById("productSelect");

  //Recorre el arreglo y crea las opciones para el html
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

// Inicia el contador en localStorage
if (!localStorage.getItem("reviewCount")) {
  localStorage.setItem("reviewCount", "0");
}

// Añade un event listener al formulario
document.querySelector("form").addEventListener("submit", function (e) {
  // Incrementa el contador
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count.toString());
});
