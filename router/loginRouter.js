const express = require('express')
const router = express.Router()
const dbCon = require('../databse')

router.get('/', (req, res) => {
    res.render('login', { error: '' })
})

module.exports = router