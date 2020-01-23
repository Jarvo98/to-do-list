<?php
    class Folder {
        public $key;
        public $name;
        public $toDo;

        function __construct($key, $name) {
            $this->key = $key;
            $this->name = $name;
            $this->toDo = array();
        }
    }
?>