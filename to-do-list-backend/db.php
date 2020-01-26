<?php
    define('SERVER', '127.0.0.1:3306');
    define('USER', 'root');
    define('PASSWORD', '');

    $conn = mysqli_connect(SERVER, USER, PASSWORD);

    if (!$conn) {
        die('Connection failed: '.mysqli_connect_error());
    }
?>