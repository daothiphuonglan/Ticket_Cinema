
var items = [];
    
function addToCart() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var item = checkboxes[i].nextElementSibling.nextElementSibling.textContent;
       
      var price = checkboxes[i].nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    
      
      items.push(item + ' ' + price);
    }
  }
  displayCart();
}

function displayCart() {
  var cartList = document.querySelector('.cart ul');
  cartList.innerHTML = '';
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement('li');
    li.textContent = items[i];
    cartList.appendChild(li);
  }
  displayTotal();
}

function displayTotal() {
  var totalDiv = document.querySelector('.total');
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var price = parseFloat(items[i].split('$')[1]);
    total += price;
  }
  totalDiv.textContent = 'Total: $' + total.toFixed(2);
}

function checkout() {
  alert('Thank you for your purchase!');
  items = [];
  displayCart();
}
