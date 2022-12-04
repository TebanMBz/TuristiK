const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render(__dirname + '/../../views/admin/orders/index')
})

router.get('/createOrder/', (req, res) => {
    res.render(__dirname + '/../../views/admin/orders/create')
})

module.exports = router