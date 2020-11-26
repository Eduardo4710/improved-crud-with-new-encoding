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
              <td data-label="Id">${datosProdct.id}</td>
              <td data-label="Nombre">${datosProdct.nombre}</td>
              <td data-label="Precio">${datosProdct.precio}</td>
              <td data-label="Exitencia">${datosProdct.existencia}</td>
              <td data-label="Categoria">${datosProdct.categoria}</td>
              <td data-label="Operaciones">
              <button class="eliminar"><img src="iconos/eliminar.png"width="15" height=""></button> 
              <button class="editar"><img src="iconos/editar.png" width="15" height=""></button> 
              </td>
                 </tr>`
                }
          $("#show_result").html(tabla);
        }
	});
}

