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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/1nigeria-temple.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/2manti-temple.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/3payson-utah-temple.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/4yigo_guam_temple.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/5washington_temple.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/6lima-peru-temple.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/7mexico-city-temple.jpg",
  },
  {
    templeName: "Recife Brasil",
    location: "Recife, Brasil",
    dedicated: "2000, December, 15",
    area: 11351,
    imageUrl: "images/8recife-brazil-temple.jpg",
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 7316,
    imageUrl: "images/10Barranquilla-Columblia.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl: "images/9santiago-chile-temple.jpg",
  },
];

//Funcion para cerrar el menu de navegacion
function closeMenu() {
  navigation.classList.remove("open");
  hamButton.classList.remove("open");
}
// Función para actualizar el título y mostrar los templos filtrados
function updateDisplayAndTitle(temples, title) {
  document.getElementById("mainTitle").textContent = title;
  displayTemples(temples);
  closeMenu();
}

//filtra los templos antiguos
const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  updateDisplayAndTitle(
    temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900),
    "Old Temples"
  );
});

//filtra los templos nuevos
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  updateDisplayAndTitle(
    temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000),
    "New Temples"
  );
});
//filtra los templos por area grande
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  updateDisplayAndTitle(
    temples.filter((temple) => temple.area > 90000),
    "Large Temples"
  );
});
//filtra los templos por area pequeña
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  updateDisplayAndTitle(
    temples.filter((temple) => temple.area < 10000),
    "Small Temples"
  );
});
//muestra todos los templos
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  updateDisplayAndTitle(temples, "Home");
});

// Función para crear una tarjeta de templo
function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");
  card.innerHTML = `
    <div class="temple-info">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    </div>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="300">      
  `;
  return card;
}

// Función para mostrar todos los templos
function displayTemples(temples) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";
  temples.forEach((temple) => {
    container.appendChild(createTempleCard(temple));
  });
}

// Llamar a la función para mostrar los templos cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
});
