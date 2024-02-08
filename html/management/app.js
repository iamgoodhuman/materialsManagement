let express = require("express")
let app = express()
let db = require('./db/inex')
app.get('/demo',(req,res)=>{
    res.send('测试接口成功')
})
app.get('/list',(req,res)=>{
    let questSql = 'SELECT * FROM USER'
    db.query(questSql,(err,data)=>{
        if(err){res.send({
            code:0,
            msg:"查询失败"
        })
            console.log("查询失败")
        }else{
            let newData = JSON.parse(JSON.stringify(data))
            res.send({
                code:1,
                msg:"查询成功",
                data:newData
            })
        }
    })
})
console.log("启动成功")
app.listen(3003)