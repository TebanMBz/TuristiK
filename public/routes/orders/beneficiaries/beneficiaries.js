const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/beneficiaries/listBeneficiaries')
})

router.get('/createBeneficiary/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/beneficiaries/create')
})

router.get('/confirmBeneficiaries/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/beneficiaries/confirmBeneficiaries')

})

module.exports = router