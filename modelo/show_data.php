<?php
        include("conexion.php");
        $opcion = (isset($_POST['id'])) ? $_POST['id'] : '';
      //  $nombre=(isset($_POST['nombre'])) ? $_POST['nombre'] : '';


        switch ( $opcion) {
            case 1:
        $consulta= "CALL sp_select_productos()";
        $resultado=mysqli_query($conexion, $consulta);
        while($row = mysqli_fetch_assoc($resultado))
        {
             $array[]=$row;
        }
                 echo json_encode($array);
        break;
        }

?>