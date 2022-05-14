function validate() {
    if (document.loginForm.email.value == "") {
      alert("Lütfen giriş yapmak için emailinizi giriniz!");
      document.loginForm.email.focus();
      return false;
    }
    if (document.loginForm.password.value == "") {
      alert("Lütfen giriş yapmak için şifrenizi giriniz!");
      document.loginForm.password.focus();
      return false;
    }
  
    return true;
  }