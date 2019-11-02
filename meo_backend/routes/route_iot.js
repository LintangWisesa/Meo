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

// post data
router.post('/iot', (req, res)=>{
    var dbStat = 'insert into meo_iot set ?'
    var data = {
        iid: req.body.iid,
        isuhu: req.body.isuhu,
        ilembab: req.body.ilembab,
        ipress: req.body.ipress,
        ilux: req.body.ilux,
        iaccx: req.body.iaccx,
        iaccy: req.body.iaccy,
        iaccz: req.body.iaccz,
        igx: req.body.igx,
        igy: req.body.igy,
        igz: req.body.igz
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
                iid: req.body.iid,
                isuhu: req.body.isuhu,
                ilembab: req.body.ilembab,
                ipress: req.body.ipress,
                ilux: req.body.ilux,
                iaccx: req.body.iaccx,
                iaccy: req.body.iaccy,
                iaccz: req.body.iaccz,
                igx: req.body.igx,
                igy: req.body.igy,
                igz: req.body.igz,
                status: 'ok'
            })
        }
    })
})

// get 1 latest data
router.get('/iotone', (req, res) => {
    var dbStat = 'select * from meo_iot order by itime desc limit 1;'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// get latest 50 data
router.get('/iot', (req, res) => {
    var dbStat = 'select * from meo_iot order by itime limit 50;'
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