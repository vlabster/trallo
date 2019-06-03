<?php
    if (empty($_REQUEST['name']) != false) {
        echo 0;
    }
    else {
        $date = date('Y-m-d H:i:s');
        $name = $_REQUEST['name'];
        $private = $_REQUEST['private'];
        $userId = $_REQUEST['user_id'];
        include("db/db.php");
        $query = "INSERT INTO board (created, name, private) VALUES ('$date', '$name', '$private');";
        $res = $mysqli->query($query);
        $query = "Select id from board where created IN (SELECT MAX(created) as time FROM board)";
        $res = $mysqli->query($query);
        if ($res) {
            while ($row = $res->fetch_assoc()) {
                $boardId = $row['id'];
            }
        }
        $query = "INSERT INTO boardHasUser (user, board) VALUES ('$userId', '$boardId')";
        $res = $mysqli->query($query);
        echo 1;
    }  
?>