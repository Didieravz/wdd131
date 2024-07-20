document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad del menú
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");
      const isExpanded = mainNav.classList.contains("active");
      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Cerrar menú" : "Abrir menú"
      );
    });
  }

  // Función para redirigir al formulario de reserva
  function redirectToReservationForm(tourType) {
    localStorage.setItem("selectedTour", tourType);
    localStorage.setItem("returnPage", window.location.href);
    window.location.href = "reserva-form.html";
  }

  // Manejo de clics en los botones de reserva de tour
  document.querySelectorAll(".book-tour, #reserva").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const tourType = this.getAttribute("data-tour") || "general";
      redirectToReservationForm(tourType);
    });
  });

  // Maneja el formulario de reserva
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    // Establecer el tour seleccionado en el formulario
    const selectedTour = localStorage.getItem("selectedTour");
    if (selectedTour) {
      const tourSelect = document.getElementById("tour");
      if (tourSelect) {
        tourSelect.value = selectedTour;
      }
    }

    // Manejar el botón de regreso
    const returnButton = document.getElementById("return-button");
    if (returnButton) {
      returnButton.addEventListener("click", function () {
        const returnPage =
          localStorage.getItem("returnPage") || "cumorah-inicio.html";
        window.location.href = returnPage;
      });
    }

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Incrementar el contador de reservas
      let reservations =
        parseInt(localStorage.getItem("reservations") || "0") + 1;
      localStorage.setItem("reservations", reservations);

      // Mostrar mensaje de confirmación y redirigir
      alert(
        "Thank you for your reservation! We will contact you shortly with further details." +
          reservations
      );
      setTimeout(() => {
        window.location.href = "cumorah-inicio.html";
      }, 500);
    });
  }
});
