<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Pruebas</title>
    </head>

    <body>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(function () {
                var data = {
                    nombre: 'Codificar',
                    id: 1
                }

                $.post("http://localhost:8080/folder/delete/", data,
                    function (response) {
                        console.log(response);
                    }
                );
            });    
        </script>
    </body>
</html>