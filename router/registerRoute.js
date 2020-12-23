const express = require('express')
const router = express.Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const { v4: uuidv4 } = require('uuid');
const dbCon = require('../databse')

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

    const query = `insert into biblotekistat(emri,mbiemri,email,password,kontakti,uuid,verified) values ("${emri}","${mbiemri}","${email}","${password}","${kontakti}","${uuid}","${verified}")`
    dbCon.execute(query)
    res.render('register', { error: 'u Shtua ne databaz' })
})

module.exports = router