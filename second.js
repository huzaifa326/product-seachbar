// search form element and search input element ko select karen
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

// search form ko submit hone par handle karein
searchForm.addEventListener('submit', (e) => {
  // submit hone se pehle default behaviour ko prevent karein
  e.preventDefault();

  // search input ki value ko fetch karein
  const searchValue = searchInput.value.toLowerCase();

  // product list ke sabhi products ko select karein
  const products = document.querySelectorAll('.product');

  // har product par loop lagayein
  products.forEach((product) => {
    // product ke title ko select karein
    const title = product.querySelector('h2').textContent.toLowerCase();

    // agar search value title mein match karta hai to product ko display karein, warna hide karein
    if (title.includes(searchValue)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
