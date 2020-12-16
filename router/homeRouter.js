const express = require('express')
const router = express.Router()
const dbCon = require('../databse.js')

router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router