let express = require("express")
let app = express()
let db = require('./db/inex')
var bodyParser = require('body-parser');
app.use(bodyParser());
app.get('/demo', (req, res) => {
    res.send('测试接口成功')
})
app.get('/demo/list', (req, res) => {
    let questSql = 'SELECT * FROM USER'
    db.query(questSql, (err, data) => {
        if (err) {
            res.send({
                code: 0,
                msg: "查询失败"
            })
            console.log("查询失败")
        } else {
            let newData = JSON.parse(JSON.stringify(data))
            res.send({
                code: 1,
                msg: "查询成功",
                data: newData
            })
        }
    })
})



app.post('/demo/insure/enter', (req, res) => {
    console.log(req.body);
    let info = req.body
    let enterSql = "INSERT INTO insure (insure_company, insure_name,insure_type,insure_date,insure_beneficiary) VALUES (" + info.insure_company + ',' + info.insure_name + ',' + info.insure_type + ',' + info.insure_date + ',' + info.insure_beneficiary + ")"
    db.query(enterSql, (err, data) => {
        if (err) {
            res.send({
                code: 0,
                msg: "插入失败"
            })
        }else{
            res.send({
                code: 200,
                msg: "录入成功",
            })
        }
    })

});


app.get('/demo/insure/query', (req, res) => {
    let querySql = 'select * from insure'
    db.query(querySql, (err, data) => {
        if (err) {
            res.send({
                code: 0,
                msg: "查询失败"
            })
        }else{
            res.send({
                code: 200,
                msg: "查询成功",
                data:data
            })
        }
    })

});

console.log("启动成功")
app.listen(3003)