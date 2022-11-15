const express = require('express')
const hbs = require('hbs')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use(express.static('public'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', function (req, res) {
    res.render(__dirname + '/public/views/admin/formsTemplate.hbs')
})

app.get('/table', function (req, res) {
    res.render(__dirname + '/public/views/admin/tablesTemplate.hbs',
    )
})

app.get('/dashboard', function (req, res) {
    res.render(__dirname + '/public/views/admin/dashboard.hbs')
})

app.get('/packages', function (req, res) {
    res.render(__dirname + '/public/views/admin/packages.hbs')
})

app.get('/calendar', function (req, res) {
    res.render(__dirname + '/public/views/admin/calendar.hbs')
})

app.get('/roles', function (req, res) {
    res.render(__dirname + '/public/views/admin/roles.hbs')
})

app.get('/costumers', function (req, res) {
    res.render(__dirname + '/public/views/admin/costumers.hbs')

})


// <-- ORDERS MODULE -->

app.get('/orders', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/index')
})

app.get('/createOrder', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/create')
})

app.get('/editOrder', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/edit')
})

app.get('/beneficiaries', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/beneficiaries/listBeneficiaries')
})

app.get('/createBeneficiary', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/beneficiaries/create')
})

app.get('/confirmBeneficiaries', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/beneficiaries/confirmBeneficiaries')
})

app.get('/payments', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/payments/listPayments')
})

app.get('/editPayment', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/payments/edit')
})

app.get('/createPayment', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders/payments/create')
})


// <-- END OF ORDERS MODULE -->


app.get('/employees', function (req, res) {
    res.render(__dirname + '/public/views/admin/employees.hbs')

})

app.get('/users', function (req, res) {
    res.render(__dirname + '/public/views/admin/users.hbs')
})

app.get('/profile', function (req, res) {
    res.render(__dirname + '/public/views/admin/profile.hbs')
})

app.get('*', function (req, res) {
    res.render(__dirname + '/public/views/admin/404.hbs')
})

app.listen(port)