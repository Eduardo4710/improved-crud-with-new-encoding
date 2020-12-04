<?php
        include("conexion.php");
        $opcion = (isset($_POST['option'])) ? $_POST['option'] : '';

        $id = (isset($_POST['clave'])) ? $_POST['clave'] : '';
        $nombre = (isset($_POST['nomb'])) ? $_POST['nomb'] : '';
        $precio = (isset($_POST['prec'])) ? $_POST['prec'] : '';
        $existencia = (isset($_POST['exis'])) ? $_POST['exis'] : '';
        $categiria = (isset($_POST['categ'])) ? $_POST['categ'] : '';

        switch ($opcion) {
            case 1:
        $consulta= "CALL sp_select_productos()";
        $resultado=mysqli_query($conexion, $consulta);
        while($row = mysqli_fetch_assoc($resultado))
        {
             $array[]=$row;
        }
         echo json_encode($array);
        break;
        case 2:

            $consulta="CALL sp_save_procdutos('$nombre','$precio','$existencia','$categiria' )";
            $resultado=mysqli_query($conexion, $consulta);
        break;
        case 3:
            $consulta="CALL sp_delite_procdutos('$id')";
            $resultado=mysqli_query($conexion, $consulta); 

        break;
        case 4:
            $consulta="CALL sp_editar_productos('$id','$nombre','$precio','$existencia','$categiria')";
            $resultado=mysqli_query($conexion, $consulta); 
        break;
        
        }
?>




