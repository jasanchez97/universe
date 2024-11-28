const hamburguerIcon = document.getElementById('hamburguer-icon');
const sideMenu = document.querySelector('.side-menu');

hamburguerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('opened');
})

document.addEventListener("DOMContentLoaded", function() {
  var goTopPage = document.getElementById("go-top-page");

  goTopPage.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})