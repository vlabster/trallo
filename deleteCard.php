<?php
    $cardId = $_REQUEST['id'];
    include("db/db.php");
    $query = "DELETE FROM card where card.id = $cardId";
    $mysqli->real_query($query);
    $res = $mysqli->store_result();
?>