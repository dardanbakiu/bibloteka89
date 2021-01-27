const express = require('express')
const dbCon = require('../databse')
const router = express.Router()

router.get('/shtoLiber', (req, res) => {
    res.render('shtoLiber', { err: '' })
})

router.post('/shtoLiberForm', (req, res) => {
    const { titulli, autori, sasia } = req.body

    // console.log(titulli, autori, sasia)
    const query = `INSERT  INTO librat(titulli,autori,sasia) VALUES ("${titulli}","${autori}",${sasia})`
    dbCon.execute(query)
    res.render('shtoLiber', { err: 'u shtua ne db' })
})

module.exports = router