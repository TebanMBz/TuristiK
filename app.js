const express = require('express')
const hbs = require('hbs')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use(express.static('public'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', function (req, res) {
    res.render(__dirname + '/public/views/admin/dashboard.hbs')
})

app.get('/login', function (req, res) {
    res.render(__dirname + '/public/views/admin/login.hbs',
    {
        email : "avarga6@misena.edu.co",
        pass : "dinocrack1.KRTV"
    })
})

app.get('/table', function (req, res) {
    res.render(__dirname + '/public/views/admin/tablesTemplate.hbs',
    )
})

app.get('/dashboard', function (req, res) {
    res.render(__dirname + '/public/views/admin/dashboard.hbs')
})

//<----------------- Packages --------------->

app.get('/packages', function (req, res) {
    res.render(__dirname + '/public/views/admin/Packages/packagesList')
})

app.get('/createPackage', function (req, res) {
    res.render(__dirname + '/public/views/admin/Packages/createPackage')
})

app.get('/editPackage', function (req, res) {
    res.render(__dirname + '/public/views/admin/Packages/editPackage')
})

//<------------------ End packages ------------>

app.get('/calendar', function (req, res) {
    res.render(__dirname + '/public/views/admin/calendar.hbs')
})

//ROLES-----------------------------------------------------------

app.get('/roles', function (req, res) {
    res.render(__dirname + '/public/views/admin/Roles/Index.hbs')
})

app.get('/EditRol', function (req, res) {
    res.render(__dirname + '/public/views/admin/Roles/EditRol.hbs')
})

app.get('/CreateRol', function (req, res) {
    res.render(__dirname + '/public/views/admin/Roles/CreateRol.hbs')
})

//Costumers--------------------------------------------------------

app.get('/costumers', function (req, res) {
    res.render(__dirname + '/public/views/admin/Costumers/costumers.hbs')
})

app.get('/createCostumers', function (req, res) {
    res.render(__dirname + '/public/views/admin/Costumers/createCostumers.hbs')
})

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

app.get('/employees', function (req, res) {
    res.render(__dirname + '/public/views/admin/Employees/employees.hbs')

})

app.get('/createEmployees', function (req, res) {
    res.render(__dirname + '/public/views/admin/Employees/createEmployees.hbs')
})

app.get('/editEmployees', function (req, res) {
    res.render(__dirname + '/public/views/admin/Employees/editEmployees.hbs')
})

//-----------------------------------------------------------------
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