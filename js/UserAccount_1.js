var listUserBlock = document.querySelector('#list-courses');
var users ="http://localhost:3000/user";

function start(){
        getUserAccount(renderUserAccount); 
        handleCreateForm() ; 
}
start();

function getUserAccount(callback){
    fetch(users)
      .then(function(response){
        return response.json();
      })
      .then (callback)
}
function createUserAccount(data,callback){
           var options={
            method:'POST',
            headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify(data)
           }
           fetch(users, options)
           .then(function(response){
            response.json();
           })
           .then(callback);
}

function deleteUserAccount(id){
    var options={
            method:'DELETE',
            headers: {
            "Content-Type": "application/json"},
            
           }
           fetch(users+"/"+id, options)
           .then(function(response){
            response.json();
           })
           .then(function(){
            getUserAccount(renderUserAccount); 
        });
}

function renderUserAccount(users){
    var html = users.map(function(user){
        return `
       
         
        <tr class="user-item-${user.id}">
             <td>${user.name}</td>
            
             <td>${user.age}</td>
             <td>${user.description}</td>
             <td><button onClick="deleteUserAccount(${user.id})">Delete</button></td>
             

            </tr>`
        
    })
    listUserBlock.innerHTML=html.join('')
}
function handleCreateForm(){
    var createBtn =document.querySelector('#create');
    createBtn.onclick = function(){
       
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var age=document.querySelector('input[name="age"]').value
       
         var formData={
           name:name,
           
           age:age,
           description: description
         }
       createUserAccount(formData, function(){
        getUserAccount(renderUserAccount); 
       });
    }
}