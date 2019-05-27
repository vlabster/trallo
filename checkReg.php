<?php
    session_start();
    if (isset($_REQUEST['login'])) {
        $login = $_REQUEST['login'];
        if ($login == '') {
            unset($login);
        }
    }
    if (isset($_REQUEST['password'])) {
        $pass = $_REQUEST['password'];
        if ($pass == '') {
            unset($pass);
        }
    }
    if (empty($login) or empty($pass))
    {
        exit("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }

    $login = stripslashes($login);
    $login = htmlspecialchars($login);
    $pass = stripslashes($pass);
    $pass = htmlspecialchars($pass);

    $login = trim($login);
    $pass = trim($pass);

    include("db/db.php");
    $query = "SELECT * FROM user WHERE login='$login'";
    $result = $mysqli->query($query);
    $myrow = mysqli_fetch_array($result);
    if (empty($myrow['password'])) {
        echo(0);
    } else {
        if (password_verify($pass, $myrow['password'])) {
            $_SESSION['login'] = $myrow['login'];
            $_SESSION['id'] = $myrow['id']; 
            echo(1);
        } else {
            echo(0);
        }
    }
?>