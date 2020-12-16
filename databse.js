const mysql = require('mysql2')

const dbCon = mysql.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER
})

module.exports = dbCon