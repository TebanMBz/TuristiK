const express = require('express')
const hbs = require('hbs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', function (req, res) {
    res.render(__dirname + '/public/views/admin/dashboard.hbs')
})

app.get('/table', function (req, res) {
    res.render(__dirname + '/public/views/admin/tablesTemplate.hbs')
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

//---------------------------------------------------------------

app.get('/costumers', function (req, res) {
    res.render(__dirname + '/public/views/admin/formsTemplate.hbs')

})

app.get('/orders', function (req, res) {
    res.render(__dirname + '/public/views/admin/orders.hbs')

})

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

app.listen(3000)