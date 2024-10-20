const products = [
  {
    name: 'EBS-05',
    brand: 'Epson',
    description: 'Some description about the product.'
  },
  {
    name: 'EBS-05',
    brand: 'Epson',
    description: 'Some description about the product.'
  },
  {
    name: 'EBS-05',
    brand: 'Epson',
    description: 'Some description about the product.'
  },
  {
    name: 'EBS-05',
    brand: 'Epson',
    description: 'Some description about the product.'
  }
];




const productsContainer = document.getElementById('products-container');

    products.forEach((product, index) => {
      const productCard = `
        <div class="cell is-one-quarter-desktop is-one-half-mobile js-modal-trigger" data-target="productModel" data-id=${index} style="cursor: pointer">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <img
                  src="https://bulma.io/assets/images/placeholders/128x128.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 is-size-6-mobile">${product.name}</p>
                  <p class="subtitle is-6 is-size-7-mobile">${product.brand}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });







document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});




document.addEventListener('DOMContentLoaded', () => {

  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal with product details
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = document.getElementById('productModal');

    $trigger.addEventListener('click', () => {
      // Get the product index from the data-id attribute
      const productId = $trigger.getAttribute('data-id');
      const product = products[productId];

      // Populate modal with product details
      modal.querySelector('.modal-card-title').textContent = product.name;
      modal.querySelector('.modal-card-body').innerHTML = `
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p>${product.description}</p>
      `;

      openModal(modal);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});




