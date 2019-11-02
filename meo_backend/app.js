var express = require('express')
var cors = require('cors')
var route_user = require('./routes/route_user.js')
var route_upload = require('./routes/route_upload.js')
var route_cars = require('./routes/route_cars.js')
var route_email = require('./routes/route_email.js')
var route_iot = require('./routes/route_iot.js')

var app = express()
app.use(cors())
app.use('/profile', express.static('profile'));
app.use('/img', express.static('img'));
app.use(route_user)
app.use(route_upload)
app.use(route_cars)
app.use(route_email)
app.use(route_iot)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/app.html')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})