function clickCuriosityButton() {
  clickCuriosityButtonSun();
  clickCuriosityButtonVenus();
  clickCuriosityButtonMars();
}

function clickCuriosityButtonSun() {
  // Obtener los elementos
  const button = document.getElementById('button-sun');
  const box = document.querySelector('.sun-container');
  
  // Añadir el evento de clic solo una vez
  button.addEventListener('click', () => {
    // Alternar la clase 'sun-container-expanded' para aplicar la animación
    box.classList.toggle('sun-container-expanded');
  });
}

function clickCuriosityButtonVenus() {
  // Obtener los elementos
  const button = document.getElementById('button-venus');
  const box = document.querySelector('.section-1-item-venus');
  
  // Añadir el evento de clic solo una vez
  button.addEventListener('click', () => {
    // Alternar la clase '.section-1-item-venus-expanded' para aplicar la animación
    box.classList.toggle('section-1-item-venus-expanded');
  });
}

function clickCuriosityButtonMars() {
  // Obtener los elementos
  const button = document.getElementById('button-mars');
  const box = document.querySelector('.section-1-item-mars');
  
  // Añadir el evento de clic solo una vez
  button.addEventListener('click', () => {
    // Alternar la clase '.section-1-item-mars-expanded' para aplicar la animación
    box.classList.toggle('section-1-item-mars-expanded');
  });
}

// Ejecutar la función cuando la página esté lista
clickCuriosityButton();