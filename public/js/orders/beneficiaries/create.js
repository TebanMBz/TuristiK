const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    phone: /^\d{10,10}$/, // 7 a 14 numeros.
    number: /^([0-9]){7,10}$/
}
const fields = []
const paramsId = new URLSearchParams(window.location.search)
const id = paramsId.get('id')

for (let i = 1; i <= id; i++) {
    const name = false
    const last_name = false
    const document = false
    const birth_date = false
    const address = false
    const phone = false
    const eps = false
    fields[i] = { name, last_name, document, birth_date, address, phone, eps }
    if (i == 1) {
        $('#beneficiaries_form').append(`
    <div class="mb-3">
        <h4>Beneficiario ${i}</h4>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label for="create_beneficiary_name_${i}" class="form-label">Nombres</label>
                <input type="text" id="create_beneficiary_name_${i}"
                    class="form-control border-left-dark"
                    placeholder="Ingrese los nombres del beneficiario" required>
                <div class="invalid-feedback">
                    Por favor ingrese unicamente letras. No se aceptan números
                    o caracteres especiales además de tildes.
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="create_beneficiary_last_name_${i}" class="form-label">Apellidos</label>
                <input type="text" id="create_beneficiary_last_name_${i}"
                    class="form-control border-left-dark"
                    placeholder="Ingrese los apellidos del beneficiario" required>
                <div class="invalid-feedback">
                    Por favor ingrese unicamente letras. No se aceptan números
                    o caracteres especiales además de tildes.
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label for="create_beneficiary_document_${i}" class="form-label">Documento</label>
                <div class="input-group">
                    <input type="text" id="create_beneficiary_document_${i}"
                        class="form-control border-left-dark"
                        placeholder="Ingrese el documento del beneficiario" required>
                    <div class="input-group-prepend">
                        <span class="input-group-text rounded-right"><i
                                class="fas fa-id-card"></i></span>
                    </div>
                    <div class="invalid-feedback">
                        Por favor ingrese unicamente números, (7-10 digitos). No se aceptan letras
                        o caracteres especiales.
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="create_beneficiary_birth_date_${i}" class="form-label">Fecha de
                    nacimiento</label>
                <input type="date" max="2022-12-04" id="create_beneficiary_birth_date_${i}"
                    class="form-control border-left-dark">
                <div class="invalid-feedback">
                    Este campo es obligatorio.
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="create_beneficiary_address_${i}" class="form-label">Dirección</label>
        <div class="input-group">
            <input type="text" id="create_beneficiary_address_${i}"
                class="form-control border-left-dark"
                placeholder="Ej: País - Ciudad - Barrio - Dirección" required>
            <div class="input-group-prepend">
                <span class="input-group-text rounded-right"><i
                        class="fas fa-location-arrow"></i></span>
            </div>
            <div class="invalid-feedback">
                Por favor rellene este campo, esta información no será compartida con
                terceros.
            </div>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <div class="form-group">
                    <label for="create_beneficiary_phone_${i}" class="form-label">Teléfono</label>
                <div class="input-group">
                    <input type="text" id="create_beneficiary_phone_${i}"
                        class="form-control border-left-dark"
                        placeholder="Teléfono del beneficiario" required>
                    <div class="input-group-prepend">
                        <span class="input-group-text rounded-right"><i
                                class="fas fa-phone-alt"></i></span>
                    </div>
                    <div class="invalid-feedback">
                        La longitud debe ser de 10 números, no se permiten letras o caracteres especiales.
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="create_beneficiary_eps_${i}" class="form-label">Tipo de
                    EPS</label>
                <div class="input-group">
                    <input type="text" id="create_beneficiary_eps_${i}"
                        class="form-control border-left-dark"
                        placeholder="EPS del beneficiario" required>
                    <div class="input-group-prepend">
                        <span class="input-group-text rounded-right"><i
                                class="fas fa-hospital-user"></i></span>
                    </div>
                    <div class="invalid-feedback">
                        Por favor ingrese unicamente letras, no se aceptan caracteres
                        especiales.
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        )
    } else {
        $('#beneficiaries_form').append(`
        <hr>
        <div class="mb-3">
            <h4>Beneficiario ${i}</h4>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="create_beneficiary_name_${i}" class="form-label">Nombres</label>
                    <input type="text" id="create_beneficiary_name_${i}"
                        class="form-control border-left-dark"
                        placeholder="Ingrese los nombres del beneficiario" required>
                    <div class="invalid-feedback">
                        Por favor ingrese unicamente letras. No se aceptan números
                        o caracteres especiales además de tildes.
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="create_beneficiary_last_name_${i}" class="form-label">Apellidos</label>
                    <input type="text" id="create_beneficiary_last_name_${i}"
                        class="form-control border-left-dark"
                        placeholder="Ingrese los apellidos del beneficiario" required>
                    <div class="invalid-feedback">
                        Por favor ingrese unicamente letras. No se aceptan números
                        o caracteres especiales además de tildes.
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="create_beneficiary_document_${i}" class="form-label">Documento</label>
                    <div class="input-group">
                        <input type="text" id="create_beneficiary_document_${i}"
                            class="form-control border-left-dark"
                            placeholder="Ingrese el documento del beneficiario" required>
                        <div class="input-group-prepend">
                            <span class="input-group-text rounded-right"><i
                                    class="fas fa-id-card"></i></span>
                        </div>
                        <div class="invalid-feedback">
                            Por favor ingrese unicamente números, (7-10 digitos). No se aceptan letras
                            o caracteres especiales.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="create_beneficiary_birth_date_${i}" class="form-label">Fecha de
                        nacimiento</label>
                    <input type="date" max="2022-12-04" id="create_beneficiary_birth_date_${i}"
                        class="form-control border-left-dark">
                    <div class="invalid-feedback">
                        Este campo es obligatorio.
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="create_beneficiary_address_${i}" class="form-label">Dirección</label>
            <div class="input-group">
                <input type="text" id="create_beneficiary_address_${i}"
                    class="form-control border-left-dark"
                    placeholder="Ej: País - Ciudad - Barrio - Dirección" required>
                <div class="input-group-prepend">
                    <span class="input-group-text rounded-right"><i
                            class="fas fa-location-arrow"></i></span>
                </div>
                <div class="invalid-feedback">
                    Por favor rellene este campo, esta información no será compartida con
                    terceros.
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <div class="form-group">
                        <label for="create_beneficiary_phone_${i}" class="form-label">Teléfono</label>
                    <div class="input-group">
                        <input type="text" id="create_beneficiary_phone_${i}"
                            class="form-control border-left-dark"
                            placeholder="Teléfono del beneficiario" required>
                        <div class="input-group-prepend">
                            <span class="input-group-text rounded-right"><i
                                    class="fas fa-phone-alt"></i></span>
                        </div>
                        <div class="invalid-feedback">
                            La longitud debe ser de 10 números, no se permiten letras o caracteres especiales.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="create_beneficiary_eps_${i}" class="form-label">Tipo de
                        EPS</label>
                    <div class="input-group">
                        <input type="text" id="create_beneficiary_eps_${i}"
                            class="form-control border-left-dark"
                            placeholder="EPS del beneficiario" required>
                        <div class="input-group-prepend">
                            <span class="input-group-text rounded-right"><i
                                    class="fas fa-hospital-user"></i></span>
                        </div>
                        <div class="invalid-feedback">
                            Por favor ingrese unicamente letras, no se aceptan caracteres
                            especiales.
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        )
    }
}
const inputs = document.querySelectorAll('#form input')
// const newForm = document.getElementById('new_beneficiary_form')
// newForm.addEventListener('click', () => {
//     $('#beneficiaries_form').append(`
//         <hr>
//         <div class="mb-3">
//             <h4>Beneficiario ${i + 1}</h4>
//         </div>
//         <div class="row">
//             <div class="col">
//                 <div class="form-group">
//                     <label for="create_beneficiary_name_${i + 1}" class="form-label">Nombres</label>
//                     <input type="text" id="create_beneficiary_name_${i + 1}"
//                         class="form-control border-left-dark"
//                         placeholder="Ingrese los nombres del beneficiario" required>
//                     <div class="invalid-feedback">
//                         Por favor ingrese unicamente letras. No se aceptan números
//                         o caracteres especiales además de tildes.
//                     </div>
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="form-group">
//                     <label for="create_beneficiary_last_name_${i + 1}" class="form-label">Apellidos</label>
//                     <input type="text" id="create_beneficiary_last_name_${i + 1}"
//                         class="form-control border-left-dark"
//                         placeholder="Ingrese los apellidos del beneficiario" required>
//                     <div class="invalid-feedback">
//                         Por favor ingrese unicamente letras. No se aceptan números
//                         o caracteres especiales además de tildes.
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="row">
//             <div class="col">
//                 <div class="form-group">
//                     <label for="create_beneficiary_document_${i + 1}" class="form-label">Documento</label>
//                     <div class="input-group">
//                         <input type="text" id="create_beneficiary_document_${i + 1}"
//                             class="form-control border-left-dark"
//                             placeholder="Ingrese el documento del beneficiario" required>
//                         <div class="input-group-prepend">
//                             <span class="input-group-text rounded-right"><i
//                                     class="fas fa-id-card"></i></span>
//                         </div>
//                         <div class="invalid-feedback">
//                             Por favor ingrese unicamente números, (7-10 digitos). No se aceptan letras
//                             o caracteres especiales.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="form-group">
//                     <label for="create_beneficiary_birth_date_${i + 1}" class="form-label">Fecha de
//                         nacimiento</label>
//                     <input type="date" id="create_beneficiary_birth_date_${i + 1}"
//                         class="form-control border-left-dark">
//                     <div class="invalid-feedback">
//                         Este campo es obligatorio.
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="form-group">
//             <label for="create_beneficiary_address_${i + 1}" class="form-label">Dirección</label>
//             <div class="input-group">
//                 <input type="text" id="create_beneficiary_address_${i + 1}"
//                     class="form-control border-left-dark"
//                     placeholder="Ej: País - Ciudad - Barrio - Dirección" required>
//                 <div class="input-group-prepend">
//                     <span class="input-group-text rounded-right"><i
//                             class="fas fa-location-arrow"></i></span>
//                 </div>
//                 <div class="invalid-feedback">
//                     Por favor rellene este campo, esta información no será compartida con
//                     terceros.
//                 </div>
//             </div>
//         </div>
//         <div class="row mb-3">
//             <div class="col">
//                 <div class="form-group">
//                         <label for="create_beneficiary_phone_${i + 1}" class="form-label">Teléfono</label>
//                     <div class="input-group">
//                         <input type="text" id="create_beneficiary_phone_${i + 1}"
//                             class="form-control border-left-dark"
//                             placeholder="Teléfono del beneficiario" required>
//                         <div class="input-group-prepend">
//                             <span class="input-group-text rounded-right"><i
//                                     class="fas fa-phone-alt"></i></span>
//                         </div>
//                         <div class="invalid-feedback">
//                             La longitud debe ser de 10 números, no se permiten letras o caracteres especiales.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="form-group">
//                     <label for="create_beneficiary_eps_${i + 1}" class="form-label">Tipo de
//                         EPS</label>
//                     <div class="input-group">
//                         <input type="text" id="create_beneficiary_eps_${i + 1}"
//                             class="form-control border-left-dark"
//                             placeholder="EPS del beneficiario" required>
//                         <div class="input-group-prepend">
//                             <span class="input-group-text rounded-right"><i
//                                     class="fas fa-hospital-user"></i></span>
//                         </div>
//                         <div class="invalid-feedback">
//                             Por favor ingrese unicamente letras, no se aceptan caracteres
//                             especiales.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             `
//     )
//     const input = document.querySelectorAll('#form input')
//     input.forEach((input) => {
//         input.addEventListener('keyup', validateForm)
//         input.addEventListener('blur', validateForm)
//     })
// })

const validateForm = (e) => {
    for (let i = 1; i <= id; i++) {
        switch (e.target.id) {
            case `create_beneficiary_name_${i}`:
                validateField(expressions.name, e.target, i, 'name', `name_${i}`)
                break;
            case `create_beneficiary_last_name_${i}`:
                validateField(expressions.name, e.target, i, 'last_name', `last_name_${i}`)
                break;
            case `create_beneficiary_document_${i}`:
                validateField(expressions.number, e.target, i, 'document', `document_${i}`)
                break;
            case `create_beneficiary_birth_date_${i}`:
                if (e.target.value != '') {
                    document.getElementById(`create_beneficiary_birth_date_${i}`).classList.remove('is-invalid')
                    document.getElementById(`create_beneficiary_birth_date_${i}`).classList.add('is-valid')
                    fields[i]['birth_date'] = true
                } else {
                    document.getElementById(`create_beneficiary_birth_date_${i}`).classList.add('is-invalid')
                    fields[i]['birth_date'] = false
                }
                break;
            case `create_beneficiary_address_${i}`:
                if (e.target.value != '') {
                    document.getElementById(`create_beneficiary_address_${i}`).classList.remove('is-invalid')
                    document.getElementById(`create_beneficiary_address_${i}`).classList.add('is-valid')
                    fields[i]['address'] = true
                } else {
                    document.getElementById(`create_beneficiary_address_${i}`).classList.add('is-invalid')
                    fields[i]['address'] = false
                }
                break;
            case `create_beneficiary_phone_${i}`:
                validateField(expressions.phone, e.target, i, 'phone', `phone_${i}`)
                break;
            case `create_beneficiary_eps_${i}`:
                validateField(expressions.name, e.target, i, 'eps', `eps_${i}`)
                break;
            default:
                break;
        }
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})


const validateField = (expression, input, i, field_name, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`create_beneficiary_${field}`).classList.remove('is-invalid')
        document.getElementById(`create_beneficiary_${field}`).classList.add('is-valid')
        fields[i][field_name] = true
    } else {
        document.getElementById(`create_beneficiary_${field}`).classList.add('is-invalid')
        fields[i][field_name] = false
    }
}

const paramsD = new URLSearchParams(window.location.search)
const d = paramsD.get('d')
$('#saveButton').click(() => {
    let flag = false
    for (let i = 1; i < fields.length; i++) {
        if (!(fields[i].name && fields[i].last_name && fields[i].document && fields[i].birth_date && fields[i].address && fields[i].phone && fields[i].eps)) {
            flag = false
            break
        } else {
            flag = true
        }
    }
    if (flag) {
        if (d) {
            window.location = `/beneficiaries/confirmBeneficiaries/?id=${id}&d=${d}`
        } else {
            window.location = `/beneficiaries/confirmBeneficiaries/?id=${id}`
        }
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

$('#backButton').click(() => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Si regresas perderás tu proceso actual!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, regresar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            if (d) {
                window.location = '/beneficiaries/'
            } else {
                window.location = '/orders/createOrder'
            }
        }
    })
})