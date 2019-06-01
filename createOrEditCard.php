<?php
    $_REQUEST['qqw'] = 'qqw';
    if (!isset($_REQUEST['id'])) {
        if (empty($_REQUEST['$list']) != false) {
            $list = "0";
        }
        else {
            $list = $_REQUEST['$list'];
        }
        $date = date('Y-m-d H:i:s');//->format('Y-m-d H:i:s');
        $text = $_REQUEST['text'];
        $tags = $_REQUEST['tags'];
        $board = $_REQUEST['board'];
        $userId = $_REQUEST['user_id'];
        include("db/db.php");
        $query = "INSERT INTO card (status, created, board, text, user) VALUES ('$list', '$date', '$board', '$text', '$userId');";
        $res = $mysqli->query($query);//$mysqli->real_query($query);
        //$qqw = $mysqli->error;
        //$res = $mysqli->store_result();
        //"CREATE ...."
    }
    else {
        switch ($_REQUEST['status']) {
            case "new":
                $status = 0;
                break;
            case "work":
                $status = 1;
                break;
            case "test":
                $status = 2;
                break;
            case "done":
                $status = 3;
                break;
        }
        $cardId = $_REQUEST['id'];
        $tags = $_REQUEST['tags'];
        $text = $_REQUEST['text'];
        include("db/db.php");
        $query="UPDATE card SET status = '$status', text = '$text' WHERE card.id = '$cardId'";
        $res = $mysqli->query($query);//$mysqli->real_query($query);
        //$qqw = $mysqli->error;
        //UPDATE...
    }
    // $list
    // text
    // tags
?>