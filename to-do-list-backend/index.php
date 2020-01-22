<?php
    require './classes/Folder.php';
    require './classes/ToDo.php';

    $toDo1 = new ToDo('Jugar al Tera.');
    $toDo2 = new ToDo('Comer.');
    $toDo3 = new ToDo('Dormir.');

    $folder1 = new Folder(0, "Hoy");

    $folder1->add_to_do($toDo1);

    echo <<<HERE
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>{$folder1->get_name()}</title>
            </head>
            
            <body>
                <h1>{$folder1->get_name()}</h1>
                <p>{$folder1->get_to_do_in(0)->get_title()}</p>
            </body>
        </html>
HERE;
?>