const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine', 'ejs')
const session = require('express-session')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/static', express.static('static'))
const home = require('./router/homeRouter')
const admin = require('./router/adminRoute')
const register = require('./router/registerRoute')
const login = require('./router/loginRouter')
const biblotekisti = require('./router/biblotekisti')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 } //30 minuta bablock
}))

app.use(home)
app.use(admin)
app.use(register)
app.use(login)
app.use(biblotekisti)

app.listen(3000)