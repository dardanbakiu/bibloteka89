const express = require('express')
const router = express.Router()
const dbCon = require('../databse')

router.get('/login', (req, res) => {
    res.render('login.ejs', { error: '' })
})

module.exports = router