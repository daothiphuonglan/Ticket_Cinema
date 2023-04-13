
var accounts ="http://localhost:3000/accounts"

// fetch from API

function start(){
    getUserSign(accounts)
    handleCreateAccount()
}
start();

 function getUserSign(callback){
     fetch(accounts)
      .then (function(response){
        return response.json();
      })
      .then(function(accounts){
        console.log(accounts);
      })
 }

 function postUserAccounts(data,callback){
    var options={
     method:'POST',
     headers: {
     "Content-Type": "application/json"},
     body: JSON.stringify(data)
    }
    fetch(accounts, options)
    .then(function(response){
     response.json();
    })
    .then(callback);
}



    function handleCreateAccount(){
        var signup = document.querySelector(".signupbtn");
        signup.onclick= function(){
        var username = document.querySelector("input[name='username']").value;
        var email =  document.querySelector("input[name='email']").value;
        var password = document.querySelector("input[name='password']").value;
        
        var formData ={
          username : username,
          email: email,
          password: password,
        
        }

        postUserAccounts(formData, function(){
            getUserSign(); 
           });

    }


    }