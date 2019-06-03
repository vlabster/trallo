<?php
    if (!isset($_REQUEST['id'])) {
        if (empty($_REQUEST['$list']) != false) {
            $list = "0";
        }
        else {
            $list = $_REQUEST['$list'];
        }
        $date = date('Y-m-d H:i:s');
        $text = $_REQUEST['text'];
        $tags = $_REQUEST['tags'];
        $board = $_REQUEST['board'];
        $userId = $_REQUEST['user_id'];
        include("db/db.php");
        $query = "INSERT INTO card (status, created, board, text, user) VALUES ('$list', '$date', '$board', '$text', '$userId');";
        $res = $mysqli->query($query);
        //"CREATE ...."
    }
    else {
        if (empty($_REQUEST['$list']) != false) {
            $list = "0";
        }
        else {
            $list = $_REQUEST['$list'];
        }
        $cardId = $_REQUEST['id'];
        $tags = $_REQUEST['tags'];
        $text = $_REQUEST['text'];
        $color = $_REQUEST['color'];
        include("db/db.php");
        $query="UPDATE card SET status = '$list', text = '$text', color = '$color' WHERE card.id = '$cardId'";
        $res = $mysqli->query($query);
        //UPDATE...
    }
?>