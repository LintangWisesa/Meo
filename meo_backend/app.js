var express = require('express')
var cors = require('cors')
var route_user = require('./routes/route_user.js')

var app = express()
app.use(cors())
app.use('/file', express.static('file'));
app.use(route_user)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/app.html')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})