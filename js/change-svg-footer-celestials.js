// Function to change images based on resolution
function changeImagesByResolution() {
  // Check the window size
  if (window.innerWidth < 769) {
    // If the resolution is less than 768px, change the images to mobile versions
    document.getElementById('img-footer-1').src = '../img/facebook-mobile.png';
    document.getElementById('img-footer-2').src = '../img/instagram-mobile.png';
    document.getElementById('img-footer-3').src = '../img/twitter-mobile.png';
    document.getElementById('img-footer-4').src = '../img/youtube-mobile.png';
  } else {
    // If the resolution is greater than or equal to 768px, revert to the default images
    document.getElementById('img-footer-1').src = '../img/svg-facebook.png';
    document.getElementById('img-footer-2').src = '../img/svg-instagram.png';
    document.getElementById('img-footer-3').src = '../img/svg-twitter.png';
    document.getElementById('img-footer-4').src = '../img/svg-youtube.png';
  }
}

// Call the function when the page loads
window.onload = changeImagesByResolution;

// Call the function every time the window size changes
window.onresize = changeImagesByResolution;
