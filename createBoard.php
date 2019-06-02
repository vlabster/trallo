<?php
    $date = date('Y-m-d H:i:s');//->format('Y-m-d H:i:s');
    $text = $_REQUEST['text'];
    $tags = $_REQUEST['tags'];
    $board = $_REQUEST['board'];
    $userId = $_REQUEST['user_id'];
    include("db/db.php");
    $query = "INSERT INTO card (status, created, board, text, user) VALUES ('$list', '$date', '$board', '$text', '$userId');";
    $res = $mysqli->query($query);//$mysqli->real_query($query);
    $query = "Select id from board where created IN (SELECT MAX(created) as time FROM board)";
    //$qqw = $mysqli->error;
    //$res = $mysqli->store_result();
    //"CREATE ...."
?>