<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Giriş Yap</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <!-- Fontawesome -->
    <script
      src="https://kit.fontawesome.com/f62e4bda19.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-end mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <i class="fa-solid fa-y fa-4x bi me-2" width="40" height="32"></i>
          <span class="fs-4">UNUS EMRE KURTULUŞ</span>
        </a>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a href="index.html" class="nav-link" >Hakkımda</a>
          </li>
          <li class="nav-item">
            <a href="cv.html" class="nav-link">Eğitim</a>
          </li>
          <li class="nav-item">
            <a href="city.html" class="nav-link">Şehrim</a>
          </li>
          <li class="nav-item">
            <a href="interest.html" class="nav-link">İlgi Alanlarım</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">İletişim</a>
          </li>
          <li class="nav-item">
            <a href="login.html" class="btn btn-warning">Log in</a>
          </li>
        </ul>
      </header>

      <div
        class="row align-items-center justify-content-center"
        style="min-height: 75vh"
      >
      <h1 class="text-center bg-success py-3 rounded">Hoşgeldiniz 
      <?php 
      $email = "b171210374@sakarya.edu.tr";
      $password = "b171210374";
      $postedEmail = $_POST['email'];
      $postedPassword = $_POST['password'];

      $emailArray = explode("@", $postedEmail);
      $emailDomain = $emailArray[0];
      

      if ($email == $postedEmail) {
        if ($password == $postedPassword) {
          if ($emailDomain == $postedPassword) {
            echo $emailDomain; 
          }
        }
        else{
          goBack();
        }
      }
      else{
        goBack();
      }

      function goBack(){
        echo $htmlHeader;
        while($stuff){
          echo $stuff;
        }
        echo "<script>window.location = 'login.html'</script>";
      }
      ?></h1>
      </div>
    </div>
    <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="index.html" class="nav-link px-2 text-muted">Hakkımda</a>
            </li>
            <li class="nav-item">
              <a href="cv.html" class="nav-link px-2 text-muted">Eğitim</a>
            </li>
            <li class="nav-item">
              <a href="city.html" class="nav-link px-2 text-muted">Şehrim</a>
            </li>
            <li class="nav-item">
              <a href="interest.html" class="nav-link px-2 text-muted">İlgi Alanlarım</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link px-2 text-muted">İletişim</a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2022 Yunus Emre Kurtuluş</p>
        </footer>
      </div>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <script src="./js/login.js"></script>
  </body>
</html>