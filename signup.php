<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <title>Singup</title>
    <link rel="stylesheet" href ="signupstyle.css">
</head>
<body>
    <section id="img_num_1">
        <img src="img/daft.jpg" alt="">
    </section>
    <section id = "signup">
        
        <form action='xulidangky.php' method = 'post' id ="myForm">
        <h2>Sign up</h2>
        <img src="img/logo.png" alt="">
        <input type="text" name="email" placeholder="Email" id ="tx11" onkeyup="ValidateEmail()">
        <p id = "email_error_msg">Invalid email !</p>
        <i class="bi bi-check-circle-fill" id ="check_icon1"></i>
        <input type="text" name="username" placeholder="Username" id ="tx22">
        <input type="password" name="password" placeholder="Password" id ="tx33">
        <i class="bi bi-eye-slash-fill" id ="user_password_eye_icon" onclick="ShowPassword()"></i>
        <input type="password" name="repassword" placeholder="Re-Password" id ="tx44" onkeyup="CheckMatch()">
        <i class="bi bi-check-circle-fill" id ="check_icon2"></i>
        <p id = "not_match_msg">Does not match your password !</p>
        
    <div id = "Buttons">
        <input type="submit" value="Sign up" id ="OK" class ="button"/>
    </div>
    
    <p>Already have an account ? <a href="index.php">Log in</a></p>
    </form>
    <img src="img/bg-gif-unscreen.gif" alt="">
    </section>
    <i class="bi icons bi-music-note-beamed" id="beam1"></i>
    <div class="soundWaves">
        <div class="line1 active" style="--i:1;"></div>
        <div class="line2 active" style="--i:2;"></div>
        <div class="line3 active" style="--i:3;"></div>
        <div class="line4 active" style="--i:4;"></div>
        <div class="line5 active" style="--i:5;"></div>
    </div>

    <div class="soundWaves1">
        <div class="line11 active" style="--i:1;"></div>
        <div class="line22 active" style="--i:2;"></div>
        <div class="line33 active" style="--i:3;"></div>
        <div class="line44 active" style="--i:4;"></div>
        <div class="line55 active" style="--i:5;"></div>
    </div>
    
    <section id="img_num_2">
        <img src="img/punk.jpg" alt="">
    </section>
    <script src = "signup.js"></script>
</body>
</html>