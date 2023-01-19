const form = document.getElementById('myForm');
function ShowPassword (){
    let password = document.getElementById('tx33');
    let eye = document.getElementById('user_password_eye_icon');
    if(password.type ==="password")
    {
        password.type = "text";
        eye.classList.remove('bi-eye-slash-fill');
        eye.classList.add('bi-eye-fill');}
    else if(password.type === "text")
    {
        password.type ="password";
        eye.classList.add('bi-eye-slash-fill');
        eye.classList.remove('bi-eye-fill');
        
        

    }   
};


function CheckMatch(){
    let password = document.getElementById('tx33');
    let repassword = document.getElementById('tx44');
    let checkicon2 = document.getElementById('check_icon2');
    let matchmsg = document.getElementById('not_match_msg');
    if(password.value == repassword.value){
        if(password.value == "" && repassword.value == "")
            {checkicon2.style.display = "none";
            matchmsg.style.display = "none";
            repassword.style.border = "none"
            return false;
        }
        else{
            checkicon2.style.display = "flex";
            matchmsg.style.display = "none";
            repassword.style.border = "2px solid #6FD61E"
        return true;
    }


    }
    else if(password.value != repassword.value){
        if(repassword.value ==""){
            matchmsg.style.display = "none";
            checkicon2.style.display = "none"
            repassword.style.border = "none"
            return false;
    
        }
        else{
        checkicon2.style.display = "none";
        matchmsg.style.display = "flex";
        repassword.style.border = "2px solid #D61E55"
        return false;}
    }
       
    
};
function ValidateEmail(){
    let email = document.getElementById('tx11');
    let checkicon1 = document.getElementById('check_icon1');
    let email_error_msg = document.getElementById('email_error_msg');

    if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        if(email.value.length == 0){
            email_error_msg.style.display = "none";
            checkicon1.style.display = "none";
            email.style.border = "none"
            return false;
        }
        else{
        email_error_msg.style.display = "flex";
        checkicon1.style.display = "none"
        email.style.border = "2px solid #D61E55"
    return false;}
    }
    else{
        email_error_msg.style.display = "none";
        checkicon1.style.display = "flex";
        email.style.border = "2px solid #6FD61E"
        return true;
    }


};

form.addEventListener('submit',(e) =>{
    
    let email = document.getElementById('tx11');
    let username = document.getElementById('tx22');
    let password = document.getElementById('tx33');
    let repassword = document.getElementById('tx44');

    if(email.value == "" || username.value == "" || password.value == "" || repassword.value == ""){
        alert("Please fill all information !");
        e.preventDefault();
        
    }
    else{
        if(CheckMatch() && ValidateEmail()){
            alert("Signed up successfully !");
        }
        else 
        {if (!CheckMatch()){
            alert("Your Re_password does not match your password !");
            e.preventDefault();
        }
            if(!ValidateEmail()){
                alert("Your email is invalid !");
                e.preventDefault();
            }
    
        }
    
    }
});