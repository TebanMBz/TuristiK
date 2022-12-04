const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/payments/listpayments')
})

router.get('/createPayment/process/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/payments/create')
})

router.get('/createPayment/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/payments/create')
})

router.get('/editPayment/', (req, res) => {
    res.render(__dirname + '/../../../views/admin/orders/payments/edit')
})

module.exports = router