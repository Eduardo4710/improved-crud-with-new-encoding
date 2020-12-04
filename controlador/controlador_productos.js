/*--------------Funcionalidades del modal y  llamadas de las funciones full_table y add_product--------------- */
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
/*==========Cerrar modal para editar============= */
  $("#cerrar_editar").click(function cerra_modal_editar()
  {
    $(".modal_Editar").removeClass("modalMostra");
    $(".contenedor_modal_Editar").removeClass("contenedor_modal_mostra");
  })
  add_productos();
  full_table();
  
});
/*--------------Mostrar Productos-------------- */
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
              <button class="eliminar"  id='eliminar'  data='${datosProdct.id}'><img src="iconos/eliminar.png"width="15" height=""></button> 
              <button class="editar" id='editar'  data='${datosProdct.id}'><img src="iconos/editar.png" width="15" height=""></button> 
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
  
    if(_nombre !="" && _precio!="" && _existen !=""  && _categoria !="")
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

$(function()
{
  var id_produ;
/*--------------------Proceso de eliminar --------------------------- */
  $(document).on("click","#eliminar",function(){
    let   fila = $(this).closest("tr");
    id_produ = parseInt(fila.find('td:eq(0)').text());
    Swal.fire({
      title: `¿Quieres eliminar este registro? ${id_produ}`,
      text: "¡No podrás revertir esto!¡Sí, bórralo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
       data_delite(id_produ);
        Swal.fire(
          'Eliminado!',
          'Proceso exitos.',
          'success'
        )
      }
    })
  });
  function  data_delite(id_produ)
  {
    $.ajax({
      url:'modelo/show_data.php',
      type:"post",
      data:{ option:3,clave:id_produ},
      error:function(){alert("error de archivo");},
      success:function(res){

        full_table();
        }
    });
  }

/* --------------------Proceso de editar--------------------------- */
  $(document).on("click","#editar",function(){
      $(".modal_Editar").addClass("modalMostra");
      $(".contenedor_modal_Editar").addClass("contenedor_modal_mostra");
  //document.querySelector('.navPanel img').closest('td')
     let   fila = $(this).closest("tr");
     id_produ = parseInt(fila.find('td:eq(0)').text());
      let name_product = fila.find('td:eq(1)').text();
      let price_product  = fila.find('td:eq(2)').text();
      let existence_product = fila.find('td:eq(3)').text();
      let category_product = fila.find('td:eq(4)').text();
      $("#input_nom_Editar").val(name_product);
      $("#input_pre_Editar").val(price_product);
      $("#input_exis_Editar").val(existence_product);
      $("#input_catg_Editar").val(category_product);

  });

  $("#Editar").click(function ()
  {
    let name_edi= $("#input_nom_Editar").val();
    let price_edi=$("#input_pre_Editar").val();
    let exitence_edi=$("#input_exis_Editar").val();
    let category_edi= $("#input_catg_Editar").val();
    if(name_edi !="" && price_edi!="" && exitence_edi !="" && category_edi !="")
    {
    $.ajax({
      url:'modelo/show_data.php',
      type:"post",
      data:{ option:4,clave:id_produ,nomb:name_edi,prec:price_edi,exis:exitence_edi,categ:category_edi},
      error:function(){alert("error de archivo");},
      success:function(res){
       all_right();
        full_table();
        }
    });
    /*------cerrar modal------- */
    $(".modal_Editar").removeClass("modalMostra");
    $(".contenedor_modal_Editar").removeClass("contenedor_modal_mostra");
  }
  else
  {
    full_campas();
  }

  })
})