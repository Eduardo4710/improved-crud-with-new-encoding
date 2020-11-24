<?php
try{
    $conexion=mysqli_connect("localhost","root","");
    mysqli_select_db($conexion,"3622290_pruebas");
    echo '<script>alert("La conexion es correcta " )</script>';

}
catch (Exception $e)
{
    die("El error de Conexión es: ". $e->getMessage());
    echo '<script>alert(" Error de Conexión " )</script>';
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



