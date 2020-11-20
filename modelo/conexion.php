<?php
try{
    $conexion=mysqli_connect("fdb29.awardspace.net","3622290_pruebas","admin369");
    mysqli_select_db($conexion,"3622290_pruebas");
    echo" La conexiones es correcta ------> :)";

}
catch (Exception $e)
{
    die("El error de Conexión es: ". $e->getMessage());
}
?> 

