<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style_icono.css">
    <link rel="stylesheet" href="css/style_renpose_tabla.css">
    <link rel="stylesheet" href="css/style_modal.css">
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
<!-- Modal para Registro-->
	<div class="modal">
		<form class="contenedor_modal">
            <header><h2>Registrar Producto</h2></header>
			<label id="cerrar"> X</label><br>
             <div class="conte_input">
                
             <article  class="form_conter"> 
             <label >Nombre:</label><br>
                  <input type="text" name="" id="input_nom">
                </article>
             <article class="form_conter">
                <label >Precio:</label><br>
                <input type="text" name="" id="input_pre">
             </article>
             <article class="form_conter">
                <label >Exitencia:</label><br>
                <input type="text" name="" id="input_exis">
             </article>
             <article class="form_conter">
                <label >Categoria:</label><br>
                <input type="text" name="" id="input_catg">
             </article>
             </div>
           <input type="button" value="Registrar" class="registrar" id="save_productos">
      </form>
      
	</div>
<!-- fin modal-->


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
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="controlador/controlador_productos.js"></script>
    <script src="controlador/alert.js"></script>

</body>
</html>
		 <!--
                ==========dominio=============
             http://my-crud-operations.getenjoyment.net/
-->