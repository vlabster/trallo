<!DOCTYPE html>
<html>
    <head>Доски</head>
    <title>Доски</title>
    <body>
        <?php
            $_SESSION['qqw'] = 'qqw';
            $baseUrl = "http://trallo/cards.php/";
            $userId = $_SESSION['id'];
            include("db/db.php");
            $query = "select board.id, board.created, board.name from board 
            left join boardHasUser on board.id = boardHasUser.board 
            left join user on user.id = boardHasUser.user 
            where user.id = $userId";
            $mysqli->real_query($query);
            $res = $mysqli->store_result();
            if ($res) {
                echo "<div class='container' style = 
                    'width:600px;
                    margin:0 auto;
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;
                    padding:15px;
                    background-color:red;'>";
                while ($row = $res->fetch_assoc()) {
                    // echo "<p><a href = " . $baseUrl . "=".$row['id']."> " . $row['name'] . "</a></p>";
                    echo "<a class='block' href=".$baseUrl."?id=".$row['id']." 
                    style = width:30%;
                    border:1px solid white;
                    background-color: blue;
                    color:white;
                    margin-bottom:20px;'><h2 class='block__heading'>".$row['name']."</h2></a>";
                }
                echo "</div>";
            }
            // $result = $mysqli->query($query);
            // $myrow = mysqli_fetch_array($result);
            // var_dump($myrow);
            // include_once("cards.php");
        ?>
    </body>
</html>