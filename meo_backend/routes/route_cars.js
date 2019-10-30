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

// add a car
router.post('/car', (req, res)=>{
    var dbStat = 'insert into meo_cars set ?'
    var data = {
        uid: req.body.uid,
        ctipe: req.body.ctipe,
        cmodel: req.body.cmodel,
        cseat: req.body.cseat,
        cth: req.body.cth,
        cplat: req.body.cplat,
        cfoto: req.body.cfoto,
        cinfo: req.body.cinfo,
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
                uid: req.body.uid,
                ctipe: req.body.ctipe,
                cmodel: req.body.cmodel,
                cseat: req.body.cseat,
                cth: req.body.cth,
                cplat: req.body.cplat,
                cfoto: req.body.cfoto,
                cinfo: req.body.cinfo,
                status: 'ok'
            })
        }
    })
})

// GET car by user id
router.get('/car/:uid', (req, res) => {
    var dbStat = 'select * from meo_cars where uid = ? order by cid desc'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

module.exports = router