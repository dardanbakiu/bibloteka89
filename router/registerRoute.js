const express = require('express')
const router = express.Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const { v4: uuidv4 } = require('uuid');
const dbCon = require('../databse')
const bcrypt = require('bcrypt')

const nodemailer = require('nodemailer')

const emailSender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

router.get('/register', adminMiddleware, (req, res) => {
    res.render('register', { error: '' })
})

router.post('/registerForm', (req, res) => {
    const emri = req.body.emri
    const mbiemri = req.body.mbiemri
    const email = req.body.email
    const password = req.body.password
    const kontakti = req.body.kontakti
    const verified = false
    const uuid = uuidv4()

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Verifiko Llogarine',
        text: `Klikoni qe te verifikoni llogarine http://localhost:3000/verify/${uuid}`
    }

    emailSender.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)
        else {
            console.log('Email sent!')
        }
    })

    const emailQuery = `SELECT * FROM biblotekistat WHERE email="${email}"`
    dbCon.query(emailQuery, (err, result, rows) => {

        if (result.length > 0) {
            res.render('register', { error: 'Ju e keni nje llogari me kete email' })
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) console.log(err)
                else {
                    const query = `insert into biblotekistat(emri,mbiemri,email,password,kontakti,uuid,verified) values ("${emri}","${mbiemri}","${email}","${hash}","${kontakti}","${uuid}","${verified}")`
                    dbCon.execute(query)
                    res.render('register', { error: 'u Shtua ne databaz' })
                }
            })
        }

    })


})

module.exports = router