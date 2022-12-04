const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    number: /^[0-9]+$/
}

const fields = {
    beneficiaries: false,
    package_id: false,
    costumer_id: false
}

const inputs = document.querySelectorAll('#form input')
const selects = document.querySelectorAll('#form select')

const validateForm = (e) => {
    switch (e.target.id) {
        case 'create_order_beneficiaries':
            validateField(expressions.number, e.target, 'beneficiaries')
            break;
        case 'create_order_package_id':
            validateField(expressions.number, e.target, 'package_id')
            break;
        case 'create_order_costumer_id':
            validateField(expressions.number, e.target, 'costumer_id')
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

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`create_order_${field}`).classList.remove('is-invalid')
        document.getElementById(`create_order_${field}`).classList.add('is-valid')
        fields[field] = true
    } else {
        document.getElementById(`create_order_${field}`).classList.add('is-invalid')
        fields[field] = false
    }
}

$('#saveButton').click(() => {
    if (fields.beneficiaries && fields.package_id && fields.costumer_id) {
        const beneficiaries = document.getElementById('create_order_beneficiaries').value
        window.location = `/beneficiaries/createBeneficiary/?id=${beneficiaries}`
    } else {
        Swal.fire({
            title: '¡Olvidaste algo!',
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
        timer: 1200
    }).then(() => {
        window.location = '/orders'
    })
})