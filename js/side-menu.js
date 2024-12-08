document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los elementos de "Contacto"
  const goBottomElements = document.querySelectorAll(".go-bottom-page");

  // Añadir el evento de clic a cada elemento
  goBottomElements.forEach(element => {
    element.addEventListener("click", function () {
      // Desplazarse al final de la página
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });

  // Botón para ir al inicio de la página
  const goTopPage = document.getElementById("go-top-page");
  if (goTopPage) {
    goTopPage.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Menú hamburguesa
  const hamburguerIcon = document.getElementById("hamburguer-icon");
  const sideMenu = document.querySelector(".side-menu");
  if (hamburguerIcon && sideMenu) {
    hamburguerIcon.addEventListener("click", function () {
      sideMenu.classList.toggle("opened");
    });
  }
});
