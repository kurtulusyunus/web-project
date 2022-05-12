var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");
var gender = localStorage.getItem("gender");
var interests = localStorage.getItem("interests");
var city = localStorage.getItem("city");
var message = localStorage.getItem("message");

document.querySelector("#firstName").innerHTML = firstName;
document.querySelector("#lastName").innerHTML = lastName;
document.querySelector("#email").innerHTML = email;
document.querySelector("#password").innerHTML = password;
document.querySelector("#gender").innerHTML = gender;
document.querySelector("#interests").innerHTML = interests;
document.getElementById("city").innerHTML = city;
document.getElementById("message").innerHTML = message;