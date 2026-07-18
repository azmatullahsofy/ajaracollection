const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const priceFilter = document.querySelector('#priceFilter');
const productCards = document.querySelectorAll('.product-card');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (priceFilter) {
  priceFilter.addEventListener('change', (event) => {
    const value = event.target.value;

    productCards.forEach((card) => {
      const price = Number(card.dataset.price || 0);
      let show = true;

      if (value === '300-380') {
        show = price >= 300 && price <= 380;
      } else if (value === '381-420') {
        show = price >= 381 && price <= 420;
      } else if (value === '421-450') {
        show = price >= 421 && price <= 450;
      }

      card.classList.toggle('hidden', !show);
    });
  });
}
