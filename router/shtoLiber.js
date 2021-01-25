const express = require('express')
const router = express.Router()

router.get('/shtoLiber', (req, res) => {
    res.render('shtoLiber', { err: '' })
})

router.post('/shtoLiberForm', (req, res) => {

})

module.exports = router