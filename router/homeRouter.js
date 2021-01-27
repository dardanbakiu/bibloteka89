const express = require('express')
const router = express.Router()
const dbCon = require('../databse.js')

router.get('/', (req, res) => {
    const query = `SELECT * FROM librat`
    dbCon.query(query, (err, result, row) => {
        console.log(result)
        res.render('home', { librat: result })
    })

})

module.exports = router