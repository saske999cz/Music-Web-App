<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <title>Login</title>
    <link rel="stylesheet" href ="loginstyle.css">
</head>
<body>
    <section id="img_num_1">
        <img src="img/daft.jpg" alt="">
    </section>
    <section id = "login">
        
        <form action='xulilogin.php' method = 'post'>
        <h2>Login</h2>
        <img src="img/logo.png" alt="">
        <input type="text" name="email" placeholder="Email" id ="tx1">
        <i class="bi icons bi-person-fill" id ="user_icon"></i>
        <input type="password" name="password" placeholder="Password" id ="tx2">
        <i class="bi icons bi-lock-fill" id = "user_password_icon"></i>
        
    <div id = "Buttons">
        <input type="submit" value="Login" id ="OK" class ="button"/>
    </div>
    <div class="check">
        <input type="checkbox" ><span>Remember me</span>
    </div>
        <p>Don't have an account yet? <a href="signup.php">Sign up</a></p>     
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
    
</body>
</html>