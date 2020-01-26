<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    require '../../classes/Folder.php';
    require '../../classes/ToDo.php';
    require '../../db.php';

    $items = array();

    $result = mysqli_query($conn, 'SELECT * FROM `to_do_list`.`folder`;');

    if (mysqli_num_rows($result) > 0) {
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $items[$i] = new Folder($i, $row['folder_name']);
            $i++;
        }
    }

    for ($i=0; $i < count($items); $i++) { 
        $result = mysqli_query($conn, "SELECT * FROM `to_do_list`.`to_do_item` WHERE `to_do_list`.`to_do_item`.`folder_name` = '{$items[$i]->name}';");

        if (mysqli_num_rows($result) > 0) {
            $e = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $items[$i]->toDo[$e] = new ToDo($row['title']);
                $e++;
            }
        }
    }

    echo json_encode($items);
?>