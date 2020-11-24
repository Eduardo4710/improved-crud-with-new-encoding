<?php
        include("conexion.php");
        $consulta= "CALL sp_select_productos()";
        $resultado=mysqli_query($conexion, $consulta);

        while($row = mysqli_fetch_array($resultado))
        {
            ?>
            <tr>
            <td><?php echo $row['id']?></td>
            <td><?php echo $row['nombre']?></td>
            <td><?php echo $row['precio']?></td>
            <td><?php echo $row['existencia']?></td>
            <td><?php echo $row['categoria']?></td>
            <td> <a href="modificar.php?clave=<php echo $row['id'];?>"><img width="5%" src="" /></a></td>
            <td> <a href="eliminar.php?clave=<php echo $row['id'];?>"><img width="5%" src="" /></a></td>
            </tr>
            <?php
        }
        ?>