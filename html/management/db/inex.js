let mysql = require('mysql')
let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:"root",
    password:"admin",
    database:'demo'
})
connection.connect()
module.exports = connection