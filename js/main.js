var cart = [];
var total = 0;
var productCont = 0;
/**
 * @param {String} name Name of de product
 * @param {Number} price Price of the product
 */
class product {
  constructor(name, price, idProduct) {
    this.name = name;
    this.price = price;
    this.idProduct = idProduct;
  }
}
/**
 * @param {Number} total 
 * @param {Object} PorductsIncart 
 */
class listOfProducts {
  constructor(total, PorductsIncart) {
    this.total = total;
    this.productcart = PorductsIncart;
  }
}
/**
 * @param {String} productName
 * @param {Number} productPrice 
 */
function addTocart(productName, productPrice, idProduct){
  let theProduct = new product(productName, productPrice, idProduct);
  cart.push(theProduct);
  console.log(`Se añadio un/a ${productName}`);
  pudateCont();
}
/**
 * @param {String} nameOfProductToDelete 
 */
function removeFromcart(nameOfProductToDelete){
  cart = cart.filter(product => product.name !== nameOfProductToDelete);
}
/**
 * @returns Total price of the products
 */
function orderSummary(){
  summary = new listOfProducts(cart.reduce((total, product) => total + product.price, 0), cart);
  saveProduct(summary);
  window.location.assign('../html/form.html');

}

function pudateCont() {
  productCont++
  const paragraph = document.getElementById('productCont');
  paragraph.textContent = productCont;
}

const buttons = document.querySelectorAll('.cart-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const originalText = button.textContent;
    button.textContent = 'Se añadio con exito';
        
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000); // Wait for 2 seconds before reverting
  });
});

function saveProduct(product) {
  let storedProducts = JSON.parse(localStorage.getItem('productcart')) || [];

  // Buscar si el producto ya existe y actualizarlo, si no, agregarlo
  const index = storedProducts.findIndex(item => item.name === product.name);
  if (index !== -1) {
    storedProducts[index] = product; // Actualiza el producto
  } else {
    storedProducts.push(product); // Añade un nuevo producto
  }

  localStorage.setItem('productcart', JSON.stringify(storedProducts));
}

// Función para eliminar un producto de localStorage
function removeProduct(productName) {
  let storedProducts = JSON.parse(localStorage.getItem('productcart')) || [];

  // Filtrar productos para eliminar el que coincida con el nombre
  storedProducts = storedProducts.filter(item => item.name !== productName);

  localStorage.setItem('productcart', JSON.stringify(storedProducts));
}