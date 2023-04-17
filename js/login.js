let apiUser = "http://localhost:3000/accounts";

//login
        var username = document.querySelector("input[name='username']").value;
        var email =  document.querySelector("input[name='email']").value;
        var password = document.querySelector("input[name='password']").value;
        const btnLogin = document.querySelector(".btn_login");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  console.log(apiUser);
  return data;
  
};

// login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == ""|| email.value=="") {
    alert("Please enter your username and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.username == username.value && user.password == password.value && user.email == email.value
      );
      if (user) {
    
        alert("Login success");
        window.location.href = "booking.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
