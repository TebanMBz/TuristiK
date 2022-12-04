const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const paramsD = new URLSearchParams(window.location.search)
const d = paramsD.get('d')
$('#backButton').click(() => {
    if (id && d) {
        window.location = `/beneficiaries/createBeneficiary/?id=${id}&d=${d}`
    } else {
        window.location = `/beneficiaries/createBeneficiary/?id=${id}`
    }
})

$('#saveButton').click(() => {
    if (id && d) {
        window.location = `/payments/createPayment/?id=${id}&d=${d}`
    } else {
        window.location = `/payments/createPayment/?id=${id}`
    }
})