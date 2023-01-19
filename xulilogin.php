<?php
$email= $_REQUEST['email'];
$pass = $_REQUEST['password'];
if ($email == "" || $pass == "") {
    header("Location:index.php");
    
} else {
    $link = mysqli_connect("localhost", "root", "") or die('Could not connect: '.mysqli_error($link));

    mysqli_select_db($link, "musicweb");

    $rs = mysqli_query($link, "SELECT * FROM account WHERE Email = '$email' AND Password = '$pass'");
    
    if (mysqli_num_rows($rs) == 0)
       { header("Location:index.php");
        }
    else
        {
        $row = mysqli_fetch_array($rs);
        if($row['Role'] == "admin")
        header("Location:amdin.php");
        else if($row['Role'] =="user")
        header("Location:user.php");
        };
        

    mysqli_free_result($rs);
    mysqli_close($link);
}
?>
