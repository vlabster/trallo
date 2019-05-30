<!DOCTYPE html>
<html>
    <head>
    <script src="front/webix/codebase/webix.js" type="text/javascript"></script>
    <script src="front\kanban\codebase\kanban.js" type="text/javascript"></script>
    <!-- css files -->
    <link rel="stylesheet" href="front/webix/codebase/webix.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="front\kanban\codebase\kanban.css" type="text/css" charset="utf-8">
    </head>
    <title>Доска</title>
    <body>
        <?php
            $userId = $_REQUEST['id'];
            $boardId = $_REQUEST['board'];
            include("db/db.php");
            $query = "select * from card where card.board = $boardId";
            $mysqli->real_query($query);
            $res = $mysqli->store_result();
            if ($res) {
                $fin = [];
                while ($row = $res->fetch_assoc()) {
                    $cards['id'] = $row['id'];
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
                    //$cards['date'] = $row['created'];
                    //$count++;
                    array_push($fin, $cards);
                }
            }
            $cardsJson = json_encode($fin);
        ?>
        <script>
            var getData = '<?php echo $cardsJson; ?>';
            //[{ id:1, status:"new", text:"Test new authentification service", tags:[1,2,3], comments:[1,2,3] }]
        </script>
        <script src="frontend\cardList.js" type="text/javascript"></script>
    </body>
</html>
