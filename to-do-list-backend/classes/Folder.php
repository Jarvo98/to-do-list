<?php
    class Folder {
        private $key;
        private $name;
        private $toDoVector;
        private $amountToDo;
        private $maxAmountToDo = 10;

        function __construct($key, $name) {
            $this->set_key($key);
            $this->set_name($name);
            $this->toDoVector = array();
            $this->amountToDo = 0;
        }

        // $key

            public function set_key($key) {
                $this->key = $key;
            }

            public function get_key() {
                return $this->key;
            }

        // $/key

        // $name

            public function set_name($name) {
                $this->name = $name;
            }

            public function get_name() {
                return $this->name;
            }

        // $/name

        // $toDoVector

            // $amountToDo

                public function get_amount_of_to_do() {
                    return $this->amountToDo;
                }

                public function increase_amount_of_to_do() {
                    if (!$this->is_folder_full()) {
                        $this->amountToDo++;
                    }
                }

                public function decrease_amount_of_to_do() {
                    if (!$this->is_folder_empty()) {
                        $this->amountToDo--;
                    }
                }

                public function is_folder_full() {
                    return $this->get_amount_of_to_do() == $this->maxAmountToDo;
                }
    
                public function is_folder_empty() {
                    return $this->get_amount_of_to_do() == 0;
                }


            // $/amountToDo

            public function is_valid_index($index) {
                return (($index >= 0) && ($index < $this->maxAmountToDo) && ($index < $this->get_amount_of_to_do()));
            }

            public function add_to_do($toDoItem) {
                if (!$this->is_folder_full()) {
                    $this->toDoVector[$this->get_amount_of_to_do()] = $toDoItem;
                    $this->increase_amount_of_to_do();
                }
            }

            public function get_to_do_in($index) {
                return $this->$toDoVector[$index];
            }
            
        // $/toDoVector
    }
?>