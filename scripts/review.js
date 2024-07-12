document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
  //obtiene el div del html a travez de su id
  const divMain = document.getElementById("divMain");
  // Obtiene el contador de localStorage
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;

  // Crea un elemento para mostrar el contador
  let counterElement = document.createElement("p");
  counterElement.textContent = `Número total de reseñas enviadas: ${count}`;

  // Añade el elemento a la página review
  divMain.appendChild(counterElement);
});
