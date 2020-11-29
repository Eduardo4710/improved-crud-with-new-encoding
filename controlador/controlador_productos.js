/*--------------Abrir Modadl--------------- */
$(function()
{
  $("#agregar").click(function()
  {
    $(".modal").addClass("modalMostra");
    $(".contenedor_modal").addClass("contenedor_modal_mostra");
  })

  $("#cerrar").click(function ()
  {
    $(".modal").removeClass("modalMostra");
    $(".contenedor_modal").removeClass("contenedor_modal_mostra");
  })



});
/*--------------Mostrar Productos-------------- */
$(function()
{
full_table();
add_productos();
});

function full_table()
{

    $.ajax({
		url:'modelo/show_data.php',
        type:"post",
        data:{ option:1},
		error:function(){alert("error de archivo");},
		success:function(res){

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
              <button class="eliminar"  id='eliminar'  data='${datosProdct}'><img src="iconos/eliminar.png"width="15" height=""></button> 
              <button class="editar"><img src="iconos/editar.png" width="15" height=""></button> 
              </td>
                 </tr>`
                }
          $("#show_result").html(tabla);
        }
	});
}
/*--------------Agregar Productos-------------- */



function add_productos()
{
$("#save_productos").click(function()
{
    let _nombre=$("#input_nom").val();
    let _precio=$("#input_pre").val();
    let _existen=$("#input_exis").val();
    let _categoria=$("#input_catg").val();
  
    if(_nombre !="" && _precio!="" && _existen !="" && _existen !="" && _categoria !="")
    {
      $.ajax({
        url:'modelo/show_data.php',
        type:"post",
        data:{ option:2,nomb:_nombre,prec:_precio,exis:_existen,categ:_categoria},
        error:function(){alert("error de archivo");},
        success:function(res){
          all_right();
          full_table();
          }
      });
       /*------cerrar modal------- */
    $(".modal").removeClass("modalMostra");
    $(".contenedor_modal").removeClass("contenedor_modal_mostra");
     /*------limpiar inputs--------- */
     $("#input_nom").val('');
     $("#input_pre").val('');
     $("#input_exis").val('');
     $("#input_catg").val('');
    }
    else
    {
      full_campas();
    }

});
}


$(document).on("click","#eliminar",function(){

  
  var datos= $(this).attr("data");
  console.log(datos); 

});

 function prueva()
 {

  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //    data_delite();
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })
 }

 

  //var datos= $(this).attr("data");

 /* Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })*/




