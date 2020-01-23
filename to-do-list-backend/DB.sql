CREATE DATABASE `to_do_list` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;
CREATE TABLE `to_do_list`.`folder` (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    folder_name VARCHAR(50) NOT NULL
);
CREATE TABLE `to_do_list`.`to_do_item` (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    folder_name VARCHAR(50) NOT NULL
);