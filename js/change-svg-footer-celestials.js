// Función para cambiar las imágenes dependiendo de la resolución
function cambiarImagenesPorResolucion() {
  // Comprobar el tamaño de la ventana
  if (window.innerWidth < 769) {
    // Si la resolución es menor que 768px, cambia las imágenes a versiones móviles
    document.getElementById('img-footer-1').src = '../img/facebook-mobile.png';
    document.getElementById('img-footer-2').src = '../img/instagram-mobile.png';
    document.getElementById('img-footer-3').src = '../img/twitter-mobile.png';
    document.getElementById('img-footer-4').src = '../img/youtube-mobile.png';
  } else {
    // Si la resolución es mayor o igual a 768px, vuelve a las imágenes por defecto
    document.getElementById('img-footer-1').src = '../img/svg-facebook.png';
    document.getElementById('img-footer-2').src = '../img/svg-instagram.png';
    document.getElementById('img-footer-3').src = '../img/svg-twitter.png';
    document.getElementById('img-footer-4').src = '../img/svg-youtube.png';
  }
}

// Llamar a la función al cargar la página
window.onload = cambiarImagenesPorResolucion;

// Llamar a la función cada vez que el tamaño de la ventana cambie
window.onresize = cambiarImagenesPorResolucion;
