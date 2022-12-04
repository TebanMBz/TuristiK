const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    phone: /^\d{10,10}$/, // 7 a 14 numeros.
    number: /^([0-9]){1,9}$/,
}

const fields = {
    amount: false,
    img: false
}

const inputs = document.querySelectorAll('#form input')
const selects = document.querySelectorAll('#form select')

const validateForm = (e) => {
    switch (e.target.id) {
        case 'payment_amount':
            validateField(expressions.number, e.target, 'amount')
            break;
        case 'payment_img':
            if (e.target.value != '') {
                document.getElementById('payment_img').classList.remove('is-invalid')
                document.getElementById('payment_img').classList.add('is-valid')
                document.getElementById('payment_img_2').classList.remove('is-invalid')
                document.getElementById('payment_img_2').classList.add('is-valid')
                fields['img'] = true
            } else {
                document.getElementById('payment_img').classList.add('is-invalid')
                document.getElementById('payment_img_2').classList.add('is-invalid')
                fields['img'] = false
            }
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
        document.getElementById(`payment_${field}`).classList.remove('is-invalid')
        document.getElementById(`payment_${field}`).classList.add('is-valid')
        fields[field] = true
    } else {
        document.getElementById(`payment_${field}`).classList.add('is-invalid')
        fields[field] = false
    }
}


$('#saveButton').click(() => {
    console.log(fields);
    if (fields.amount && fields.img) {
        Swal.fire({
            title: '¡Pedido agregado exitosamente!',
            text: 'Ahora solo debes esperar a que tu pago sea aprobado ;).',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Entendido!'
        }).then(() => {
            window.location = '/payments'
        })
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

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const paramsD = new URLSearchParams(window.location.search)
const d = paramsD.get('d')
const paramsA = new URLSearchParams(window.location.search)
const a = paramsD.get('a')
if (a) {
    document.getElementById('backButton').innerText = 'Cancelar'
}

$('#backButton').click(() => {
    if (id && d) {
        window.location = `/beneficiaries/confirmBeneficiaries/?id=${id}&d=${d}`
    } else if (a) {
        Swal.fire({
            title: 'Cancelado!',
            text: 'Has cancelado el proceso.',
            icon: 'error',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1200
        }).then(() => {
            window.location = '/payments/'
        })
    } else {
        window.location = `/beneficiaries/confirmBeneficiaries/?id=${id}`
    }
})