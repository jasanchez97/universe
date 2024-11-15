const hamburguerIcon = document.getElementById('hamburguer-icon');
const sideMenu = document.querySelector('.side-menu');

hamburguerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('opened');
});