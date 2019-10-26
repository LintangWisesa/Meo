var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'meo'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

// signup
router.post('/signup', (req, res)=>{
    var dbStat = 'insert into meo_users set ?'
    var data = {
        unama: req.body.unama,
        uemail: req.body.uemail,
        upassword: req.body.upassword,
    }
    db.query(dbStat, data, (error, output) => {
        if(error){
            console.log(error)
            res.send({
                status: 'no'
            })
        } else {
            console.log(output)
            res.send({
                unama: req.body.unama,
                uemail: req.body.uemail,
                upassword: req.body.upassword,
                status: 'ok'
            })
        }
    })
})

// login
router.post('/login', (req, res)=>{
    var dbStat = 'select * from meo_users where uemail = ? and upassword = ?'
    var uemail = req.body.uemail
    var upassword = req.body.upassword
    db.query(dbStat, [uemail, upassword], (error, output) => {
        if(error){
            console.log(error)
            res.send({
                statusLogin: 'no'
            })
        } else {
            console.log(output)
            if (output.length <= 0 || output.length > 1){
                res.send({
                    statusLogin: 'no' 
                })
            } else {
                res.send({
                    user: output[0],
                    statusLogin: 'ok' 
                })
            }
        }
    })
})

// GET all user
router.get('/user', (req, res) => {
    var dbStat = 'select * from meo_users'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

module.exports = router