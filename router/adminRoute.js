const express = require('express')
const router = express.Router()

router.get('/admin', (req, res) => {
    res.render('admin.ejs', { loginError: '' })
})

router.post('/adminLoginForm', (req, res) => {
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password

    if (username == process.env.ADMIN_USER && password == process.env.ADMIN_PW) {
        req.session.admin = username
        res.redirect('/register')
    }

    else {
        res.render('admin', { loginError: 'wrong usr/pw' })
    }
})

module.exports = router