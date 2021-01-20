const express = require('express')
const router = express.Router()
const dbCon = require('../databse')
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {
    res.render('login.ejs', { error: '' })
})

router.post("/loginForm", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const emailQuery = `SELECT email,password FROM biblotekistat WHERE email="${email}"`
    dbCon.query(emailQuery, (err, result, fields) => {
        const encryptedPassword = result[0].password
        bcrypt.compare(password, encryptedPassword, (err, isLogged) => {
            if (err) console.log(err)
            else {
                if (!isLogged) {
                    res.render('login')
                }
                else {
                    res.render('biblotekisti')
                }
            }
        })
    })
})

module.exports = router