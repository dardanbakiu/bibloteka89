const express = require('express')
const router = express.Router()

router.get('/admin', (req, res) => {
    res.render('admin.ejs')
})

router.post('/adminLoginForm', (req, res) => {
    const username = req.body.username
    const password = req.body.password
})

module.exports = router