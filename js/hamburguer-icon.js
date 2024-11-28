function createHamburguerEventListener() {
  document.getElementById("hamburguer-icon").addEventListener("click", clickShowHamburguerMenu);
  document.getElementById("hamburguer-menu").addEventListener("click", clickHideHamburguerMenu);
}

function clickShowHamburguerMenu() {
  openMenu();
  closeMenu();
}

function openMenu() {
  document.getElementById("hamburguer-menu").style.display = "block";
}

function closeMenu() {
  document.getElementById("hamburguer-menu").style.display = "none";
}

function clickHideHamburguerMenu() {
  document.getElementById("hamburguer-menu").style.display = "none";
}