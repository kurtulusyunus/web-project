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
    gender = "Kadın";
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

function validate() {
  if (firstName.value == "") {
    alert("Lütfen giriş yapmak için İsminizi giriniz!");
    firstName.focus();
    return false;
  }
  if (lastName.value == "") {
    alert("Lütfen giriş yapmak için Soyisminizi giriniz!");
    lastName.focus();
    return false;
  }
  if (email.value == "") {
    alert("Lütfen giriş yapmak için emailinizi giriniz!");
    email.focus();
    return false;
  } else {
    var email_format =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(email_format)) {
      alert("Lütfen email formatını doğru giriniz!");
      email.focus();
      return false;
    }
  }

  if (password.value == "") {
    alert("Lütfen giriş yapmak için şifrenizi giriniz!");
    password.focus();
    return false;
  }
  if (citySelect.value == "Seçiniz") {
    alert("Lütfen giriş yapmak için şehrinizi seçiniz!");
    citySelect.focus();
    return false;
  }
  if (message.value == "") {
    alert("Lütfen giriş yapmak için mesajınızı giriniz!");
    message.focus();
    return false;
  }

  getFormData();
}
