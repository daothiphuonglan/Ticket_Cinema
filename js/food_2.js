 // API
 var foods = 'http://localhost:3000/foods'
 var drinks ='http://localhost:3000/drinks'
 
 
 const listContent = document.querySelector(".menu");
 
 
 function start(){
    getFoods(function(foods){
     renderFoods(foods);
    });
 }
 
 start()
 
 // Function
 function getFoods(callback){
       fetch(foods)
       .then(function(response){
         return response.json();
       })
       .then (callback)
 }
 function renderFoods(foods){
   var listBlock = document.querySelector(".menu_item");
   var htmls = foods.map(function(food){
         return `
              <li>
               <input type="checkbox" name="food-item" id="popcorn">
               <img  class="bap"  src="${food.image}" alt="">
               <label for="popcorn">"${food.name}"</label>
               <span class="price">${food.price}</span>
               </li> `
           
         
   })
   listBlock.innerHTML =htmls.join('')
 
 }
 
       // end API
      
      
 
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
         var price = parseFloat     (items[i])    ; //(items[i].split('$')[1]);
         total += price;
       }
       totalDiv.textContent = 'Total: $' + total.toFixed(2);
     }
     
     function checkout() {
       alert('Thank you for your purchase!');
       items = [];
       displayCart();
     }