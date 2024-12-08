function clickCuriosityButton() {
  clickCuriosityButtonSun();
  clickCuriosityButtonVenus();
  clickCuriosityButtonMars();
}

function clickCuriosityButtonSun() {
  // Obtain elements
  const BUTTON_SUN = document.getElementById('button-sun');
  const SUN_CONTAINER = document.querySelector('.sun-container');

  // Add event listener only once
  BUTTON_SUN.addEventListener('click', () => {
    // Alternate the '.sun-container-expanded' class to apply the animation
    SUN_CONTAINER.classList.toggle('sun-container-expanded');
  });
}

function clickCuriosityButtonVenus() {
  // Obtain elements
  const BUTTON_SUN = document.getElementById('button-venus');
  const SUN_CONTAINER = document.querySelector('.section-1-item-venus');

  // Add event listener only once
  BUTTON_SUN.addEventListener('click', () => {
    // Alternate the '.section-1-item-venus-expanded' class to apply the animation
    SUN_CONTAINER.classList.toggle('section-1-item-venus-expanded');
  });
}

function clickCuriosityButtonMars() {
  // Obtain elements
  const button = document.getElementById('button-mars');
  const box = document.querySelector('.section-1-item-mars');

  // Add the click event only once
  button.addEventListener('click', () => {
    // Alternate the '.section-1-item-mars-expanded' class to apply the animation
    box.classList.toggle('section-1-item-mars-expanded');
  });
}

// Call the function
clickCuriosityButton();