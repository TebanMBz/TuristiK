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
    eps: false,
    address: false,
    dateBirth: false,
    email: false,
    password: false,
    passwordConfirm: false,
    emailLogin: false,
    passwordLogin: false
}

const inputs = document.querySelectorAll('#form input')
const inputsLogin = document.querySelectorAll('#formLogin input')

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
        case 'eps':
            validateField(expressions.name, e.target, 'eps')
            break;
        case 'address':
            validateField(expressions.user, e.target, 'address')
            break;
        case 'dateBirth':
            validateField(expressions.date, e.target, 'dateBirth')
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

const validateFormLogin = (e) => {
    switch (e.target.id) {
        case 'emailLogin':
            validateField(expressions.email, e.target, 'emailLogin')
            break;
        case 'passwordLogin':
            validateField(expressions.password, e.target, 'passwordLogin')
            break;
        default:
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})

inputsLogin.forEach((input) => {
    input.addEventListener('keyup', validateFormLogin)
    input.addEventListener('blur', validateFormLogin)
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

const validateFieldLogin = (expression, input, field) => {
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


$('#saveButton').click(() => {
    if (fields.name && fields.lastName && fields.document && fields.phone &&
        fields.eps && fields.address && fields.dateBirth && fields.email &&
        fields.password && fields.passwordConfirm) {
        Swal.fire({
            icon: 'success',
            title: 'Registro exitiso',
            showConfirmButton: false,
            timer: 2500

        },

            window.location = '/')
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

$('#saveButtonLogin').click(() => {
    if (fields.emailLogin && fields.passwordLogin) {
        return true

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
//Show password register
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
});

//show password Login
function ShowPasswordLogin() {
    var cambio = document.getElementById("passwordLogin");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon3').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon3').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function () {
    $('#ShowPasswordLogin').click(function () {
        $('#passwordLogin').attr('type', $(this).is(':checked') ? 'text' : 'passwordLogin');
    });
});
