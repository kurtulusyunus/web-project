var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var gender;
var interests = [];
var citySelect = document.getElementById("city");
var message = document.getElementById("message");

function getFormData() {
  chooseGender();
  chooseInterest();

  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  localStorage.setItem("gender", gender);
  localStorage.setItem("interests", interests);
  localStorage.setItem("city", citySelect.value);
  localStorage.setItem("message", message.value);

  window.location.href = "contact-show.html";
}

function chooseGender() {
  if (document.getElementById("genderMale").checked) {
    gender = "Erkek";
  } else {
    gender = "KadÄ±n";
  }
}

function chooseInterest() {
  if (document.getElementById("interestFootBall").checked == true) {
    interests.push(document.getElementById("interestFootBall").value);
  }

  if (document.getElementById("interestBasketBall").checked == true) {
    interests.push(document.getElementById("interestBasketBall").value);
  }
  if (document.getElementById("interestVolleyBall").checked == true) {
    interests.push(document.getElementById("interestVolleyBall").value);
  }
  if (document.getElementById("interestSeriesMovie").checked == true) {
    interests.push(document.getElementById("interestSeriesMovie").value);
  }
  if (document.getElementById("interestBilliard").checked == true) {
    interests.push(document.getElementById("interestBilliard").value);
  }
}
