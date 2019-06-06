<!DOCTYPE html>
<html>
    <head>
    <script src="front/webix/codebase/webix.js" type="text/javascript"></script>
    <script src="front\kanban\codebase\kanban.js" type="text/javascript"></script>
    <link rel="stylesheet" href="front/webix/codebase/webix.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="front\kanban\codebase\kanban.css" type="text/css" charset="utf-8">
    </head>
    <title>Доска</title>
    <body>
        <?php
            $userId = $_REQUEST['id'];
            $boardId = $_REQUEST['board'];
            include("db/db.php");
            $query = "select id, login from user left join boardHasUser on user.id = boardHasUser.user where boardHasUser.board = $boardId";
            $mysqli->real_query($query);
            $res = $mysqli->store_result();
            if ($res) {
                $users = [];
                while ($row = $res->fetch_assoc()) {
                    $userData['id'] = $row['id'];
                    $userData['value'] = $row['login'];
                    array_push($users, $userData);
                }
                $usersJson = json_encode($users);
            }
            $query = "select * from card where card.board = $boardId";
            $mysqli->real_query($query);
            $res = $mysqli->store_result();
            if ($res) {
                $fin = [];
                while ($row = $res->fetch_assoc()) {
                    $cards['id'] = $row['id'];
                    $cardId = $row['id'];
                    switch ($row['status']) {
                        case 0:
                            $cards['status'] = "new";
                            break;
                        case 1:
                            $cards['status'] = "work";
                            break;
                        case 2:
                            $cards['status'] = "test";
                            break;
                        case 3:
                            $cards['status'] = "done";
                            break;
                    }
                    $cards['text'] = $row['text']; 
                    $cards['color'] = $row['color'];

                    $queryCom = "SELECT * FROM comment where comment.card = '$cardId'";
                    $mysqli->real_query($queryCom);
                    $resCom = $mysqli->store_result();
                    if ($resCom) {
                        $com = [];
                        while ($rowCom = $resCom->fetch_assoc()) {
                            $comments['id'] = $rowCom['idCom'];
                            $comments['text'] = $rowCom['data'];
                            $comments['date'] = $rowCom['createdComm'];
                            $comments['user_id'] = $rowCom['userId'];
                            array_push($com, $comments);
                        }
                    }
                    $cards['comments'] = $com;
                    // if (!is_null($row['idComm'])) {
                    //     $comments['id'] = $row['idComm'];
                    //     $comments['text'] = $row['data'];
                    //     $comments['date'] = $row['createdComm'];
                    //     $comments['user_id'] = $row['userId'];
                    //     $cards['comments'] = $comments;
                    // }
                    array_push($fin, $cards);
                    // array_push($com, $comments);
                }
            }
            $cardsJson = json_encode($fin);
            // $commentsJson = json_encode($com);

        ?>
        <script>
            var getData = '<?php echo $cardsJson; ?>';
            var currentUser = '<?php echo $userId; ?>';
            var users = '<?php echo $usersJson; ?>'
            //Пример данных: [{ id:1, status:"new", text:"Test new authentification service", tags:[1,2,3], comments:[1,2,3] }]
        </script>
        <script src="frontend\cardList.js" type="text/javascript"></script>
    </body>
</html>
