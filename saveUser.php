<?php
    if (isset($_REQUEST['login'])) {
        $login = $_REQUEST['login'];
        if ($login == '') {
            unset($login);
        }
    }
    if (isset($_REQUEST['password'])) {
        $password = $_REQUEST['password'];
        if ($password == '') {
            unset($password);
        }
    }
    if (isset($_REQUEST['passwordRep'])) {
        $passwordRep = $_REQUEST['passwordRep'];
        if ($passwordRep == '') {
            unset($passwordRep);
        }
    }
    if (isset($_REQUEST['email'])) {
        $email = $_REQUEST['email'];
        if ($email == '') {
            unset($email);
        }
    }
    if (isset($_REQUEST['phone'])) {
        $phone = $_REQUEST['phone'];
        if ($phone == '') {
            unset($phone);
        }
    }
    if (isset($_REQUEST['description'])) {
        $description = $_REQUEST['description'];
        if ($description == '') {
            unset($description);
        }
    }
    if (isset($_REQUEST['fullname'])) {
        $fullname = $_REQUEST['fullname'];
        if ($fullname == '') {
            unset($fullname);
        }
    }
    if (empty($login) or empty($password) or empty($passwordRep) or empty($email) or empty($phone) or empty($fullname)) {
        echo 0;
        exit();
    }
    if (strcasecmp($password , $passwordRep) != 0) {
        echo 1;
        exit();
    }
    //проверка на теги и скрипты
    $login = stripslashes($login);
    $login = htmlspecialchars($login);
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
    $description = stripslashes($description);
    $description = htmlspecialchars($description);
    $fullname = stripslashes($fullname);
    $fullname = htmlspecialchars($fullname);

    $login = trim($login);
    $password = trim($password);
    date_default_timezone_set('UTC');
    $created = date_create()->format('Y-m-d H:i:s');
    $hash = password_hash($password, PASSWORD_DEFAULT);
    include("db/db.php"); 
    $query = "SELECT id FROM user WHERE login='$login'";
    $result = $mysqli->query($query);
    $myrow = mysqli_fetch_array($result);
    if (!empty($myrow['id'])) {
        echo 2;
        exit();
    }
    $query = "INSERT INTO user (login, password, email, phoneNumber, created, description, fullname) 
    VALUES('$login','$hash', '$email', '$phone', '$created', '$description', '$fullname')";
    $saveResult = $mysqli->query($query);

    if ($saveResult == 'TRUE') {
        echo 4;
    } else {
        echo 3;
    }
?>