function listenToMouseOverCelestialsBodys() {
  listenToMouseOverSun();
  listenToMouseOverMercury();
  listenToMouseOverVenus();
  listenToMouseOverEarth();
  listenToMouseOverMoon();
  listenToMouseOverMars();
  listenToMouseOverJupiter();
  listenToMouseOverSaturn();
  listenToMouseOverUranus();
  listenToMouseOverNeptune();
  listenToMouseOverPluto();
}

function listenToMouseOverSun() {
  const IMAGE_SUN = document.getElementById("img-sun");
  IMAGE_SUN.addEventListener("mouseover", showLinkSun);
  IMAGE_SUN.addEventListener("mouseout", handleMouseOutSun);
}

function showLinkSun() {
  const LINK_SUN = document.getElementById("link-sun");
  LINK_SUN.style.visibility = "visible";
}

function handleMouseOutSun(event) {
  const IMAGE_SUN = document.getElementById("img-sun");
  const LINK_SUN = document.getElementById("link-sun");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_SUN.contains(relatedTarget) && !LINK_SUN.contains(relatedTarget)) {
    LINK_SUN.style.visibility = "hidden";
  }
}

function listenToMouseOverMercury() {
  const IMAGE_MERCURY = document.getElementById("img-mercury");
  IMAGE_MERCURY.addEventListener("mouseover", showLinkMercury);
  IMAGE_MERCURY.addEventListener("mouseout", handleMouseOutMercury);
}

function showLinkMercury() {
  const LINK_MERCURY = document.getElementById("link-mercury");
  LINK_MERCURY.style.visibility = "visible";
}

function handleMouseOutMercury(event) {
  const IMAGE_MERCURY = document.getElementById("img-mercury");
  const LINK_MERCURY = document.getElementById("link-mercury");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_MERCURY.contains(relatedTarget) && !LINK_MERCURY.contains(relatedTarget)) {
    LINK_MERCURY.style.visibility = "hidden";
  }
}

function listenToMouseOverVenus() {
  const IMAGE_VENUS_WITH_CLOUDS = document.getElementById("venus-with-clouds");
  const IMAGE_VENUS_WITHOUT_CLOUDS = document.getElementById("venus-without-clouds");

  IMAGE_VENUS_WITH_CLOUDS.addEventListener("mouseover", showLinkVenus);
  IMAGE_VENUS_WITHOUT_CLOUDS.addEventListener("mouseover", showLinkVenus);

  IMAGE_VENUS_WITH_CLOUDS.addEventListener("mouseout", handleMouseOutVenus);
  IMAGE_VENUS_WITHOUT_CLOUDS.addEventListener("mouseout", handleMouseOutVenus);
}

function showLinkVenus() {
  const LINK_VENUS = document.getElementById("link-venus");
  LINK_VENUS.style.visibility = "visible";
}

function handleMouseOutVenus(event) {
  const IMAGE_VENUS_WITH_CLOUDS = document.getElementById("venus-with-clouds");
  const IMAGE_VENUS_WITHOUT_CLOUDS = document.getElementById("venus-without-clouds");
  const LINK_VENUS = document.getElementById("link-venus");

  const relatedTarget = event.relatedTarget;

  if (
    !IMAGE_VENUS_WITH_CLOUDS.contains(relatedTarget) &&
    !IMAGE_VENUS_WITHOUT_CLOUDS.contains(relatedTarget) &&
    !LINK_VENUS.contains(relatedTarget)
  ) {
    LINK_VENUS.style.visibility = "hidden";
  }
}

function listenToMouseOverEarth() {
  const IMAGE_EARTH = document.getElementById("img-earth");
  
  IMAGE_EARTH.addEventListener("mouseover", showLinkEarth);
  IMAGE_EARTH.addEventListener("mouseout", handleMouseOutEarth);
}

function showLinkEarth() {
  const LINK_EARTH = document.getElementById("link-earth");
  LINK_EARTH.style.visibility = "visible";
}

function handleMouseOutEarth(event) {
  const IMAGE_EARTH = document.getElementById("img-earth");
  const LINK_EARTH = document.getElementById("link-earth");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_EARTH.contains(relatedTarget) && !LINK_EARTH.contains(relatedTarget)) {
    LINK_EARTH.style.visibility = "hidden";
  }
}

function listenToMouseOverMoon() {
  const IMAGE_MOON = document.getElementById("img-moon");
  
  IMAGE_MOON.addEventListener("mouseover", showLinkMoon);
  IMAGE_MOON.addEventListener("mouseout", handleMouseOutMoon);
}

function showLinkMoon() {
  const LINK_MOON = document.getElementById("link-moon");
  LINK_MOON.style.visibility = "visible";
}

function handleMouseOutMoon(event) {
  const IMAGE_MOON = document.getElementById("img-moon");
  const LINK_MOON = document.getElementById("link-moon");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_MOON.contains(relatedTarget) && !LINK_MOON.contains(relatedTarget)) {
    LINK_MOON.style.visibility = "hidden";
  }
}

function listenToMouseOverMars() {
  const IMAGE_MARS = document.getElementById("img-mars");
  
  IMAGE_MARS.addEventListener("mouseover", showLinkMars);
  IMAGE_MARS.addEventListener("mouseout", handleMouseOutMars);
}

function showLinkMars() {
  const LINK_MARS = document.getElementById("link-mars");
  LINK_MARS.style.visibility = "visible";
}

function handleMouseOutMars(event) {
  const IMAGE_MARS = document.getElementById("img-mars");
  const LINK_MARS = document.getElementById("link-mars");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_MARS.contains(relatedTarget) && !LINK_MARS.contains(relatedTarget)) {
    LINK_MARS.style.visibility = "hidden";
  }
}

function listenToMouseOverJupiter() {
  const IMAGE_JUPITER = document.getElementById("img-jupiter");
  
  IMAGE_JUPITER.addEventListener("mouseover", showLinkJupiter);
  IMAGE_JUPITER.addEventListener("mouseout", handleMouseOutJupiter);
}

function showLinkJupiter() {
  const LINK_JUPITER = document.getElementById("link-jupiter");
  LINK_JUPITER.style.visibility = "visible";
}

function handleMouseOutJupiter(event) {
  const IMAGE_JUPITER = document.getElementById("img-jupiter");
  const LINK_JUPITER = document.getElementById("link-jupiter");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_JUPITER.contains(relatedTarget) && !LINK_JUPITER.contains(relatedTarget)) {
    LINK_JUPITER.style.visibility = "hidden";
  }
}

function listenToMouseOverSaturn() {
  const IMAGE_SATURN = document.getElementById("img-saturn");
  
  IMAGE_SATURN.addEventListener("mouseover", showLinkSaturn);
  IMAGE_SATURN.addEventListener("mouseout", handleMouseOutSaturn);
}

function showLinkSaturn() {
  const LINK_SATURN = document.getElementById("link-saturn");
  LINK_SATURN.style.visibility = "visible";
}

function handleMouseOutSaturn(event) {
  const IMAGE_SATURN = document.getElementById("img-saturn");
  const LINK_SATURN = document.getElementById("link-saturn");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_SATURN.contains(relatedTarget) && !LINK_SATURN.contains(relatedTarget)) {
    LINK_SATURN.style.visibility = "hidden";
  }
}

function listenToMouseOverUranus() {
  const IMAGE_URANUS = document.getElementById("img-uranus");
  
  IMAGE_URANUS.addEventListener("mouseover", showLinkUranus);
  IMAGE_URANUS.addEventListener("mouseout", handleMouseOutUranus);
}

function showLinkUranus() {
  const LINK_URANUS = document.getElementById("link-uranus");
  LINK_URANUS.style.visibility = "visible";
}

function handleMouseOutUranus(event) {
  const IMAGE_URANUS = document.getElementById("img-uranus");
  const LINK_URANUS = document.getElementById("link-uranus");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_URANUS.contains(relatedTarget) && !LINK_URANUS.contains(relatedTarget)) {
    LINK_URANUS.style.visibility = "hidden";
  }
}

function listenToMouseOverNeptune() {
  const IMAGE_NEPTUNE = document.getElementById("img-neptune");
  
  IMAGE_NEPTUNE.addEventListener("mouseover", showLinkNeptune);
  IMAGE_NEPTUNE.addEventListener("mouseout", handleMouseOutNeptune);
}

function showLinkNeptune() {
  const LINK_NEPTUNE = document.getElementById("link-neptune");
  LINK_NEPTUNE.style.visibility = "visible";
}

function handleMouseOutNeptune(event) {
  const IMAGE_NEPTUNE = document.getElementById("img-neptune");
  const LINK_NEPTUNE = document.getElementById("link-neptune");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_NEPTUNE.contains(relatedTarget) && !LINK_NEPTUNE.contains(relatedTarget)) {
    LINK_NEPTUNE.style.visibility = "hidden";
  }
}

function listenToMouseOverPluto() {
  const IMAGE_PLUTO = document.getElementById("img-pluto");

  IMAGE_PLUTO.addEventListener("mouseover", showLinkPluto);
  IMAGE_PLUTO.addEventListener("mouseout", handleMouseOutPluto);
}

function showLinkPluto() {
  const LINK_PLUTO = document.getElementById("link-pluto");
  LINK_PLUTO.style.visibility = "visible";
}

function handleMouseOutPluto(event) {
  const IMAGE_PLUTO = document.getElementById("img-pluto");
  const LINK_PLUTO = document.getElementById("link-pluto");

  const relatedTarget = event.relatedTarget;

  if (!IMAGE_PLUTO.contains(relatedTarget) && !LINK_PLUTO.contains(relatedTarget)) {
    LINK_PLUTO.style.visibility = "hidden";
  }
}

// Call function
listenToMouseOverCelestialsBodys()