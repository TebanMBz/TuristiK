$('#payment_verify_img').click(() => {
    const expressions = {
        user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/, // 7 a 14 numeros.
        number: /^[0-9]+$/
    }

    const fields = {
        status: false
    }

    const selects = document.querySelectorAll('#form select')

    const validateForm = (e) => {
        switch (e.target.id) {
            case 'payment_status':
                validateField(expressions.number, e.target, 'status')
                break;
            default:
                break;
        }
    }

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
        if (fields.status) {
            Swal.fire({
                title: 'Tarea exitosa',
                text: 'El estado se ha actualizado.',
                icon: 'success',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1000
            }).then(() => {
                window.location = '/payments'
            })
        } else {
            Swal.fire({
                title: '¡No hay cambios detectados!',
                text: 'Por favor selecciona un estado.',
                icon: 'error',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
            })
        }
    })
})