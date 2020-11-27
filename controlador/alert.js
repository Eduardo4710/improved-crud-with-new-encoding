function all_right()
{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Registrado',
        showConfirmButton: false,
        timer: 1000
      })
}
function  full_campas()
{
    Swal.fire(
        'Avertencia?',
        'No dejar campos vacios?',
        'question'
      )
}