//VALIDATE JUST LETTERS
function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

$('#btnCancelarRol').click(function(){
    Swal.fire({
        icon: 'error',
        title: 'El Rol se ha cancelado',
    }).then(function(params) {
        window.location='/roles'
    })
})


//VALIDATE CREATE ROL--------------------------

$('#btnCreateRol').click(function() {

    if($("#RolName").val().length < 1) {
        Swal.fire({
            icon: 'warning',
            title: 'El campo Nombre es obligatorio.',
            showConfirmButton: false,
            timer: 4500
            
        }).then(function(){
            window.location='/CreateRol'
        })
    }

    //VALIDATE NAME
    if($("#RolName").val().length < 1) {
        Swal.fire({
            icon: 'warning',
            title: 'El campo Nombre es obligatorio.',
            showConfirmButton: false,
            timer: 4500
            
        }).then(function(){
            window.location='/CreateRol'
        })
    }

    //VALIDATE PERMISSIONS
    else if(!($('#Schedule').prop('checked')) && !($('#Users').prop('checked')) &&
        !($('#Packages').prop('checked')) && !($('#Orders').prop('checked')) &&
        !($('#Sales').prop('checked')) && !($('#Roles').prop('checked')) &&
        !($('#Employees').prop('checked')) && !($('#Costumers').prop('checked'))
    ){

        Swal.fire({
            icon: 'warning',
            title: 'El rol debe tener almenos un persmiso asignado.',
            showConfirmButton: false,
            timer: 2500
            
        }).then(function(){
            window.location='/CreateRol'
        })

    }
    
    else{

        Swal.fire({
            icon: 'success',
            title: 'El rol se agrego exitosamente.',
            showConfirmButton: false,
            timer: 2500
            
        }).then(function(){
            window.location='/roles'
        })
    }

    
    
    
})


//VALIDATE EDIT ROL----------------------------
$('#btnUpdateRol').click(function() {

    //VALIDATE NAME
    if($("#RolName").val().length < 1) {
        Swal.fire({
            icon: 'warning',
            title: 'El campo Nombre es obligatorio.',
            showConfirmButton: false,
            timer: 2500
            
        }).then(function(){
            window.location='/EditRol'
        })
    }

    //VALIDATE PERMISSIONS
    else if(!($('#Schedule').prop('checked')) && !($('#Users').prop('checked')) &&
        !($('#Packages').prop('checked')) && !($('#Orders').prop('checked')) &&
        !($('#Sales').prop('checked')) && !($('#Roles').prop('checked')) &&
        !($('#Employees').prop('checked')) && !($('#Costumers').prop('checked'))
    ){

        Swal.fire({
            icon: 'warning',
            title: 'El rol debe tener almenos un persmiso asignado.',
            showConfirmButton: false,
            timer: 2500
            
        }).then(function(){
            window.location='/EditRol'
        })

    }
    
    else{        
        Swal.fire({
            icon: 'success',
            title: 'El rol se editó exitosamente.',
            showConfirmButton: false,
            timer: 2500
        }).then(function(){
            window.location='/roles'
        })
    }
})