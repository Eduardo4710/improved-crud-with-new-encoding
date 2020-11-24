<?php
try{
    $conexion=mysqli_connect("localhost","root","");
    mysqli_select_db($conexion,"3622290_pruebas");
  

}
catch (Exception $e)
{
    die("El error de Conexión es: ". $e->getMessage());
    echo " Error de Conexión ";
}

/*
<?php
try{
    $conexion=mysqli_connect("fdb29.awardspace.net","3622290_pruebas","admin369");
    mysqli_select_db($conexion,"3622290_pruebas");
    echo" La conexion es correcta ------> :)";

}
catch (Exception $e)
{
    die("El error de Conexión es: ". $e->getMessage());
}
?>






*/
?>



