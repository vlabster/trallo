<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="front/webix/codebase/webix.css" type="text/css" charset="utf-8">
        <script src="front/webix/codebase/webix.js" type="text/javascript"></script>
        <style>
        .movies .webix_dataview_item, .movies .webix_dataview_item.webix_selected{
            padding: 3px 2px;
            border-color: #fff;
            background-image:none;
            background-color:#fff;
        }
        .movies .webix_dataview_item.webix_selected .overall{
            background-color: #DBFFB0;
        }
        .overall{
            border-radius: 4px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 8px;
            height: 65px;
            padding: 10px;
            color: #555;
            text-shadow: 0 1px 0 #FFFFFF;
            background-color: #e1e4ea;
            box-shadow: 0px 1px 1px #d4d7de;
        }
        .rank{
            font-size: 14px;
            color:#df6910;
            font-weight:bold;
            float: left;
            line-height:20px;
            height:40px;
        }
        .title{
            height:40px;
            line-height:20px;
            overflow:hidden;
            font-weight:bold;
            float: left;
            padding-left: 5px;
            width: 200px;
        }
        .title_long{
            height:40px;
            line-height:20px;
            overflow:hidden;
            font-weight:bold;
            float: left;
            padding-left: 5px;
            width: 400px;
        }
        .year{
            width: 210px;
            text-align:right;
        }
    </style>

    </head>
    <title>Доски</title>
    <body>
        <?php
            $userId = $_REQUEST['id'];
            include("db/db.php");
            $query = "select board.id, board.created, board.name from board 
                        left join boardHasUser on board.id = boardHasUser.board 
                        left join user on user.id = boardHasUser.user 
                        where user.id = $userId";
            $mysqli->real_query($query);
            $res = $mysqli->store_result();
            if ($res) {
                $fin = [];
                $count = 1;
                while ($row = $res->fetch_assoc()) {
                    $boards['id'] = $row['id'];
                    $boards['title'] = $row['name'];
                    $boards['year'] = $row['created']; 
                    $boards['rank'] = $count;
                    $count++;
                    array_push($fin, $boards);
                }
            }
            $boardsJson = json_encode($fin);
        ?>
        <script>
            var getData = '<?php echo $boardsJson; ?>';
            //Пример данных: [{"id":1,"title":"The Shawshank Redemption","year":"1994","votes":"678,79","rating":"9,2","rank":"1"}];
        </script>
        <script src="frontend\boardList.js" type="text/javascript"></script>
    </body>
</html>