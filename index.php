<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style_icono.css">
    <link rel="stylesheet" href="css/style_renpose_tabla.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=BenchNine:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">

    <title>Opreciones CRUD</title>
</head>
<body>

<header class="menu_opciones">

<figure > 
    <img class="user_logo" src="iconos/user.jpg"  alt="">
</figure>
<h1>Administracion</h1>

</header>

    <br><br>
    <br>
    <br>
    <br>

    <button  id="agregar"><img src="iconos/agregar.png" width="35" height=""></button>
    <br><br>
    <br>
    <br>
    <div class="main">
        <table>
            <thead>
          <tr>
              <th class="col1" >Id</th>
              <th   >Nombre</th>
              <th >Precio</th>
              <th >Exitencia</th>
              <th >Categoria</th>
              <th  class="col6" colspan="2">Operaciones</th>
          </tr>
        </thead>
       <tbody  id="show_result">

       </tbody>
        </table>
    </div >
   
  
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>

    <script src="controlador/jquery-3.3.1.min.js"></script>
    <script src="controlador/controlador_productos.js"></script>
</body>
</html>
		 <!--
                ==========dominio=============
             http://my-crud-operations.getenjoyment.net/
-->