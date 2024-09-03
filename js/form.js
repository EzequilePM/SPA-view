const mail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const phone = new RegExp(/\d{10}/);
const names = new RegExp(/^[A-Z][a-z]+/);
/**
 * `properNoun()` check only that the first letter of the string is capitalized.
 * @param {string} name 'John', 'Mati'...
 * @returns {boolean} example `ture` = John, `false` = john.
 */
function properNoun(name){
  return names.test(name);
}
/**
 * The `validateForm()` function collects and validates the inputs of a form, such as email, first name, last name, and telephone number.
 * @param {event}
 * @returns {boolean} `true` = valid. `false` = invalid.
 */
function validateForm(event) {
  var email = document.getElementById('inputEmail').value;
  var address = document.getElementById('inputAdres').value;
  var locality = document.getElementById('inputLocality').value;
  var tel = document.getElementById('inputTel').value;
  var name = document.getElementById('inputName').value;
  var lastName = document.getElementById('inputLastName').value;
  var methodPay = document.getElementById('inputMethodPay').value;
  if (email === '' || address === '' || locality === '' || tel === '' || name === '' || lastName === '' || methodPay === '') {
    alert('Por favor, complete todos los campos.');
    event.preventDefault();
    return false; 
  }else{
    if (!mail.test(email)){
      alert('Email no valido');
      event.preventDefault();
      return false;
    }
    if (!phone.test(tel)){
      alert('Telefono no valido');
      event.preventDefault();
      return false;
    }
    if (!properNoun(lastName) || !properNoun(name)){
      alert('Nombre y/o apellido no valido');
      event.preventDefault();
      return false;
    }
  }
  alert('Formulario validado corectamente');
}
function populateTableFromLocalStorage() {
  const tableBody = document.getElementById('cartBody');
  const tableSumary = document.getElementById('sum');
  const storedData = JSON.parse(localStorage.getItem('productcart')) || [];
  const products = (storedData.length > 0) ? storedData[0].productcart : [];

  console.log('Products Array:', products);
  tableBody.innerHTML = '';

  products.forEach(product => {
    const newRow = document.createElement('tr');
    const productNameCell = document.createElement('td');
    
    productNameCell.textContent = product.name;
    const quantityCell = document.createElement('td');

    quantityCell.textContent = "1";
    const priceCell = document.createElement('td');

    priceCell.textContent = `${product.price}$`;

    newRow.appendChild(productNameCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(priceCell);

    tableBody.appendChild(newRow);
  });
  tableSumary.textContent = `${storedData[0].total}$`;
  
}
window.onload = populateTableFromLocalStorage;