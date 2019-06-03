<?php
    $name = $_REQUEST['name'];
    $boardId = $_REQUEST['boardId'];
    include("db/db.php");
    $query = "SELECT id FROM user WHERE login = '$name';";
    $mysqli->real_query($query);
    $res = $mysqli->store_result();
    if ($res) {
        while ($row = $res->fetch_assoc()) {
            $invite = $row['id'];
        }
    }
    if (!isset($invite)) {
        echo 0;
    }
    else {
        $query = "SELECT user FROM boardHasUser where user = '$invite' and board = '$boardId'";
        $mysqli->real_query($query);
        $res = $mysqli->store_result();
        if ($res) {
            while ($row = $res->fetch_assoc()) {
                $dub = $row['user'];
            }
        }
        if (isset($dub)) {
            echo 2;
            return;
        }
        $query = "INSERT INTO boardHasUser (user, board) VALUES ('$invite', '$boardId')";
        $res = $mysqli->query($query);
        echo 1;
    }
?>