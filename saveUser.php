<?php
    if (isset($_POST['login'])) {
        $login = $_POST['login'];
        if ($login == '') {
            unset($login);
        }
    }
    if (isset($_POST['password'])) {
        $password = $_POST['password'];
        if ($password == '') {
            unset($password);
        }
    }
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        if ($email == '') {
            unset($email);
        }
    }
    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
        if ($phone == '') {
            unset($phone);
        }
    }
    if (isset($_POST['description'])) {
        $description = $_POST['description'];
        if ($description == '') {
            unset($description);
        }
    }
    if (isset($_POST['fullname'])) {
        $fullname = $_POST['fullname'];
        if ($fullname == '') {
            unset($fullname);
        }
    }
    if (empty($login) or empty($password) or empty($email) or empty($phone) or empty($fullname)) {
        exit("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
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

    include("db/db.php"); 

    $result = mysqli_query("SELECT id FROM user WHERE login='$login'", $db);
    $myrow = mysqli_fetch_array($result);
    if (!empty($myrow['id'])) {
        exit("Данный логин уже зарегистрирован.");
    }
    $saveResult = mysql_query("INSERT INTO user (login,password) VALUES('$login','$password')");

    if ($saveResult == 'TRUE') {
        echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='index.php'>Главная страница</a>";
    } else {
        echo "Ошибка! Вы не зарегистрированы.";
    }
?>