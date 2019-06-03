<?php
    $cardId = $_REQUEST['cardId'];
    switch($_REQUEST['status']) {
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
    include("db/db.php");
    $query="UPDATE card SET status = '$status' WHERE card.id = '$cardId'";
    $res = $mysqli->query($query);
?>