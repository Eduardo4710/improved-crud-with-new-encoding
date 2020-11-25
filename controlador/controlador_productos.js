$(function()
{
full_table();
});

function full_table()
{
    $.ajax({
		url:'modelo/show_data.php',
        type:"post",
        data:{ id:1},
		error:function(){alert("error de archivo");},
		success:function(res){
        console.log(res);
   		var js=JSON.parse(res);
	 	 var tabla;
	 	 for (let datosProdct of js) {
              tabla+=`
                 <tr>
              <td>${datosProdct.id}</td>
              <td>${datosProdct.nombre}</td>
              <td>${datosProdct.precio}</td>
              <td>${datosProdct.existencia}</td>
              <td>${datosProdct.categoria}</td>
              <td>
              <button class="eliminar"><img src="iconos/eliminar.png"width="15" height=""></button> 
              <button class="editar"><img src="iconos/editar.png" width="15" height=""></button> 
              </td>
                 </tr>`
                }
          $("#show_result").html(tabla);
        }
	});
}