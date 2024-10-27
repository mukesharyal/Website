    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    
      // Minimize navbar when a link is clicked
      const $navbarItems = Array.from(document.querySelectorAll('.navbar-menu .navbar-item'));
      $navbarItems.forEach(item => {
        item.addEventListener('click', () => {
          $navbarBurgers.forEach(burger => burger.classList.remove('is-active'));
          document.querySelector('.navbar-menu').classList.remove('is-active');
        });
      });
    });




document.addEventListener("DOMContentLoaded", function() {
  const bgImages = [
    'url("Assets/hero.jpg")',
    'url("Assets/background.jpg")',
    // Add more background images if needed
  ];

  // Preload background images
  let loadedImages = 0;
  const totalImages = bgImages.length;

  bgImages.forEach(function(image) {
    const img = new Image();
    img.src = image.replace(/url\("|"\)/g, ''); // Remove the url() wrapper

    img.onload = function() {
      loadedImages++;
      if (loadedImages === totalImages) {
        hidePreloader();
      }
    };

    img.onerror = function() {
      console.error(`Failed to load background image: ${img.src}`);
      loadedImages++;
      if (loadedImages === totalImages) {
        hidePreloader();
      }
    };
  });

  function hidePreloader() {
    document.getElementById("preloader").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling after loading
  }
});





