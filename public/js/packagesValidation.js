const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,200}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    number: /^[0-9]+$/,
}

const fields = {
    package_name: false,
    package_destiny: false,
    package_details: false,
    package_transportation: false,
    package_hotel: false,
    package_departure_date: false,
    package_return_date: false,
    package_departure_place: false,
    package_price: false,
    package_quotas: false,
    status: false
}

const inputs = document.querySelectorAll('#form input')
const selects = document.querySelectorAll('#form select')
const textareas = document.querySelectorAll('#form textarea')

const validateForm = (e) => {
    switch (e.target.id) {
        case 'package_name':
            validateField(expressions.name, e.target, 'package_name')
            break;
        case 'package_destiny':
            validateField(expressions.name, e.target, 'package_destiny')
            break;
        case 'package_details':
            validateField(expressions.user, e.target, 'package_details')
            break;
        case 'package_transportation':
            validateField(expressions.number, e.target, 'package_transportation')
            break;
        case 'package_hotel':
            validateField(expressions.user, e.target, 'package_hotel')
            break;
        case 'package_departure_date':
            validateField(expressions.user, e.target, 'package_departure_date')
            break;
        case 'package_return_date':
            validateField(expressions.user, e.target, 'package_return_date')
            break;
        case 'package_departure_place':
            validateField(expressions.name, e.target, 'package_departure_place')
            break;
        case 'package_price':
            validateField(expressions.number, e.target, 'package_price')
            break;
        case 'package_quotas':
            validateField(expressions.number, e.target, 'package_quotas')
            break;
        case 'status':
            validateField(expressions.number, e.target, 'status')
            break;
        default:
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})
selects.forEach((select) => {
    select.addEventListener('keyup', validateForm)
    select.addEventListener('blur', validateForm)
})
textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validateForm)
    textarea.addEventListener('blur', validateForm)
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

$('#saveButton').click(() => {
    if (fields.package_name && fields.package_destiny && fields.package_details && fields.package_transportation &&
        fields.package_hotel && fields.package_departure_date&& fields.package_return_date && fields.package_departure_place &&
        fields.package_price && fields.package_quotas && fields.status) {
        Swal.fire({
            icon: 'success',
            title: 'Guardado correctamente',
            showConfirmButton: false,
            timer: 2500

        },

            window.location = '/packages')
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
        window.location = '/packages'
    })
})