document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

//Evento para mostrar el menu desplegable
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
