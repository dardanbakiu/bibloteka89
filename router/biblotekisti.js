const express = require('express')
const router = express.Router()

const biblotekistiMiddleware = require('../middleware/biblotekistiMiddleware')

router.get('/biblotekisti', biblotekistiMiddleware, (req, res) => {
    res.render('biblotekisti', { err: '' })
})

router.post('/shtoLexues', (req, res) => {
    const emri = req.body.emri
    const mbiemri = req.body.mbiemri
    const libri = req.body.libri
    const kontakti = req.body.kontakti

    const data = new Date()
    const viti = data.getFullYear()
    const muji = data.getMonth() + 1
    const dita = data.getDate()
    const dataSot = `${dita}.${muji}.${viti}`
    let dataKthimit = null

    if (muji == 12) {
        dataKthimit = `${dita}.${1}.${viti + 1}`
    }
    else {
        dataKthimit = `${dita}.${muji + 1}.${viti}`
    }


    console.log(dataSot)
    console.log(dataKthimit)
})

module.exports = router