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
              <td><button>22</button> <button>22</button> </td>
                 </tr>
              `
             // tabla+='<tr><td>'+js[i].id+'</td><td>'+js[i].Imagen+'</td><td>'+js[i].Nombre+'</td><td>'+js[i].Sexo+'</td><td>'+js[i].Fecha+'</td></tr>';
          }

          $("#show_result").html(tabla);
        }

	});
}