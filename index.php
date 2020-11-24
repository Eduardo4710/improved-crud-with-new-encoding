<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=BenchNine:wght@400;700&display=swap" rel="stylesheet">
    <title>Opreciones CRUD</title>
</head>
<body>
    <br>
    <h1>Interfaz para usar las opreciones CRUD</h1>
    <hr>
    <th colspan="6"
     id="inset"> <a href="productos.php" id="agregar">Agregar datos aqui</a></th>
    <br><br>
    <br>
    <br>
    <div class="main">
        <table >
            <thead>
          <tr>
              <th class="col1" >Id</th>
              <th >Nombre</th>
              <th >Precio</th>
              <th >Exitencia</th>
              <th >Categoria</th>
              <th  class="col6" colspan="2">Operaciones</th>
          </tr>
        </thead>

       <?php
       include("modelo/show_data.php");
       ?>
        </table>
    </div>

    <script src="controlador/jquery-3.5.1.js"></script>
    <script src="controlador/controlador_productos.js"></script>
</body>
</html>
		 <!--
                ==========dominio=============
             http://my-crud-operations.getenjoyment.net/
-->