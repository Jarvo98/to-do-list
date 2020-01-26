#!/bin/bash

mysql -h 127.0.0.1:3306 -p -uroot < /to-do-list-backend/db.sql

cd to-do-list-backend && php -S localhost:8080 &
cd to-do-list-backend && npm start &