const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,50}$/, // 8 a 50 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    document: /^\d{7,18}$/, // 7 a 20 numeros.
    number: /^[0-9]+$/, 
}

const fields = {
    name: false,
    lastName: false,
    document: false,
    phone: false,
    email: false,
    password: false,
    passwordConfirm: false
}

const inputs = document.querySelectorAll('#form input')

const validateForm = (e) => {
    switch (e.target.id) {
        case 'name':
            validateField(expressions.name, e.target, 'name')
            break;
        case 'lastName':
            validateField(expressions.name, e.target, 'lastName')
            break;
        case 'document':
            validateField(expressions.document, e.target, 'document')
            break;
        case 'phone':
            validateField(expressions.number, e.target, 'phone')
            break;
        case 'email':
            validateField(expressions.email, e.target, 'email')
            break;
        case 'password':
            validateField(expressions.password, e.target, 'password')
            break;
        case 'passwordConfirm':
            validatePassword()
            break;
        default:
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {

        document.getElementById(`${field}`).classList.remove(`is-invalid`)
        document.getElementById(`${field}`).classList.add(`is-valid`)
        fields[field] = true
    }
    if (!expression.test(input.value)) {
        document.getElementById(`${field}`).classList.add(`is-invalid`)
        fields[field] = false
    }
}

const validatePassword = () => {
	const password = document.getElementById('password');
	const passwordConfirm = document.getElementById('passwordConfirm');

	if(password.value !== passwordConfirm.value){
		document.getElementById(`passwordConfirm`).classList.remove('is-valid');
		document.getElementById(`passwordConfirm`).classList.add('is-invalid');
		campos['password'] = false
	} else {
		document.getElementById(`passwordConfirm`).classList.remove('is-invalid');
		document.getElementById(`passwordConfirm`).classList.add('is-valid');
		campos['password'] = true
	}
}


$('#saveButton').click(() => {
    if (fields.name && fields.lastName && fields.document && fields.phone && fields.email &&
        fields.password && fields.passwordConfirm) {
        Swal.fire({
            icon: 'success',
            title: 'Guardado correctamente',
            showConfirmButton: false,
            timer: 2500

        },

            window.location = '/employees')
    } else {

        event.preventDefault()
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son obligatorios.',
            icon: 'error',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500
        })
    }
})

$('#cancelButton').click(() => {
    Swal.fire({
        title: 'Cancelado!',
        text: 'Has cancelado el proceso.',
        icon: 'error',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500
    }).then(() => {
        window.location = '/employees'
    })
})

//Show password
function ShowPassword() {
    var cambio = document.getElementById("password");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function () {
    $('#ShowPassword').click(function () {
        $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});

//show confirm password
function ShowPasswordConfirm() {
    var cambio = document.getElementById("passwordConfirm");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon2').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function () {
    $('#showpasswordC').click(function () {
        $('#passwordConfirm').attr('type', $(this).is(':checked') ? 'text' : 'passwordConfirm');
    });
});3
3