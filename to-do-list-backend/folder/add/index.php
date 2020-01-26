<?php
    header('Access-Control-Allow-Origin: *');
    require '../../db.php';

    $folder = json_decode(file_get_contents('php://input'), true);

    $name = $folder["name"];

    mysqli_query($conn, "INSERT INTO `to_do_list`.`folder` (`id`, `folder_name`) VALUES (NULL, '$name');");
?>