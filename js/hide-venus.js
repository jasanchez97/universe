function hideVenusWithClouds() {
    document.getElementById("venus-with-clouds").style.display = "none";
}

function showVenusWithoutClouds() {
    document.getElementById("venus-without-clouds").style.display = "block";
}

function clickVenus() {
    hideVenusWithClouds();
    showVenusWithoutClouds();
}

function showVenusWithClouds() {
    document.getElementById("venus-with-clouds").style.display = "block";
}

function hideVenusWithoutClouds() {
    document.getElementById("venus-without-clouds").style.display = "none";
}

function clickVenusWithoutClouds() {
    hideVenusWithoutClouds();
    showVenusWithClouds();
}

function createVenusEventListener() {
    document.getElementById("venus-with-clouds").addEventListener("click", clickVenus);
    document.getElementById("venus-without-clouds").addEventListener("click", clickVenusWithoutClouds);
}

createVenusEventListener();