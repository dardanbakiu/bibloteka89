const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine', 'ejs')


app.use('/static', express.static('static'))
const home = require('./router/homeRouter')
app.use(home)

app.listen(3000)