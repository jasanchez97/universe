function listenToMouseOver() {
  const IMAGE_SUN = document.getElementById("image-sun");
  IMAGE_SUN.addEventListener("mouseover", showLinkSun);
  listenToMouseOut();
}

function showLinkSun() {
  const LINK_SUN = document.getElementById("link-sun");
  LINK_SUN.style.display = "block";
  LINK_SUN.style.transition = "display 1s ease";
}

function listenToMouseOut() {
  const IMAGE_SUN = document.getElementById("image-sun");
  IMAGE_SUN.addEventListener("mouseout", hideLinkSun);
}

function hideLinkSun() {
  const LINK_SUN = document.getElementById("link-sun");
  LINK_SUN.style.display = "none";
  LINK_SUN.style.transition = "display 1s ease";
  listenToMouseOver();
}

listenToMouseOver();