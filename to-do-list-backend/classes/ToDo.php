<?php
    class ToDo {
        private $title;

        function __construct($title) {
            $this->set_title($title);
        }

        public function set_title($title) {
            $this->$title = $title;
        }

        public function get_title() {
            return $this->$title;
        }
    }
?>