const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine', 'ejs')

app.use('/static', express.static('static'))
const home = require('./router/homeRouter')
const admin = require('./router/adminRoute')

app.use(home)
app.use(admin)

app.listen(3000)