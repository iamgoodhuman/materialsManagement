let mysql = require('mysql')
let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:"root",
    password:"ZXThwc123.",
    database:'meter'
})
connection.connect()
module.exports = connection