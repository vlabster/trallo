<?php
    require_once('config.php');
    $mysqli = new mysqli ($host, $user, $password, $database);
    if ($mysqli->connect_errno) {
        echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
?>