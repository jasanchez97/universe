document.addEventListener("DOMContentLoaded", function () {
  // Get all "Contacto" elements
  const goBottomElements = document.querySelectorAll(".go-bottom-page");

  // Add event listener to each "Contacto" element
  goBottomElements.forEach(element => {
    element.addEventListener("click", function () {
      // Go bottom page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });

  // Go top page button
  const goTopPage = document.getElementById("go-top-page");
  if (goTopPage) {
    goTopPage.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Hamburguer icon
  const hamburguerIcon = document.getElementById("hamburguer-icon");
  const sideMenu = document.querySelector(".side-menu");
  if (hamburguerIcon && sideMenu) {
    hamburguerIcon.addEventListener("click", function () {
      sideMenu.classList.toggle("opened");
    });
  }
});
