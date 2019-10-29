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

// GET user by id
router.get('/user/:uid', (req, res) => {
    var dbStat = 'select * from meo_users where uid = ?'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// update profil user
router.put('/update', (req, res)=>{
    var dbStat = 'update meo_users set unama=?, uemail=?, upassword=?, ufoto=?, ualamat=?, ukota=?, utelp=? where uid =?'
    var unama = req.body.unama
    var uemail = req.body.uemail
    var upassword = req.body.upassword
    var ufoto = req.body.ufoto
    var ualamat = req.body.ualamat
    var ukota = req.body.ukota
    var utelp = req.body.utelp
    var uid = req.body.uid
    db.query(dbStat, [unama, uemail, upassword, ufoto, ualamat, ukota, utelp, uid], (error, output) => {
        if(error){
            console.log(error)
            res.send({
                statusUpdate: 'no'
            })
        } else {
            console.log(output)
            res.send({
                statusUpdate: 'ok'
            })
        }
    })
})

module.exports = router