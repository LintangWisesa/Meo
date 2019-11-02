var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var nodemailer = require('nodemailer')
var xoauth2 = require('xoauth2')

var app = express()
app.use(cors())
app.use(bodyParser.json())

// deklarasi email transporter
var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'meo.toyota.id@gmail.com',
        type: 'OAuth2',
        clientId: '916572052506-0fmjgcqj2ua4r0hq42u8m7p61cb6gbpe.apps.googleusercontent.com',
        clientSecret: 'rMhxxDodkf55M9JUGgM3R_q_',
        refreshToken: '1//04tsn0F2m9jpNCgYIARAAGAQSNwF-L9IrkN0ttCoZ01xo52gQjyOHefVR28QufYhIis9UFbVXliP1g_hCInqke1RiKmUPd4YdB8k'
    }  
})

// initial route
app.get('/email', (req, res)=>{
    res.send('<h1>Email ✉ meo.toyota.id@gmail.com sudah aktif!</h1>')
})

// route untuk kirim email
app.post('/email', (req, res)=>{
    
    // deklarasi email yang akan dikirim
    var emailku = {
        from: 'MEO 🚖 Innovation <meo.toyota.id@gmail.com>',
        to: req.body.email,
        subject: `🚖 Halo, ${req.body.nama} 🤗`,
        // text: 'Halo dunia!'
        html: `
            <h1>Halo ${req.body.nama} 🤗</h1>
            <p>Selamat, Anda telah sukses terdaftar sebagai anggota komunitas <b>Meo Innovation</b>. Manfaatkan teknologi IoT (<i>Internet of Things</i>) untuk memantau kondisi terkini mobil Toyota kesayangan Anda, sekaligus model ML (<i>Machine Learning</i>) untuk memprediksi harga jual kembalinya. Selanjutnya silakan login di <b>Meo</b>, lengkapi profil diri & Toyota kesayangan Anda di platform kami. Informasi selengkapnya silakan hubungi Customer Care kami secara online maupun offline di dealer-dealer Toyota terdekat di kota Anda.</p>
            <br/>
            <button><h3>▶ Login Meo</h3></button>
            <br/>
            <hr>
            <p><b>MEO 🚖 Innovation</b></p>
            <p>Email: <i>meo.toyota.id@gmail.com</i></p>
            <p>Home Page: <a target='_blank' href='https://lintangwisesa.github.io/Meo/'><i>MEO Innovation</i></a></p>
            <p>Github Repo: <a target='_blank' href='https://github.com/LintangWisesa/Meo'><i>MEO Repository</i></a></p>
            <p>Phone: +62 8886719327</p>
        `,
        // attachments:[{
        //         filename: 'barca.png', 
        //         path:'https://vignette.wikia.nocookie.net/logopedia/images/0/0e/Barcelona.png'
        //     },
        //     {
        //         filename: 'pesan.txt',
        //         content: 'Halo, apa kabar? Maaf nyepam!'
        //     }
        // ]
    }

    sender.sendMail(emailku, (error)=>{
        if(error){
            console.log(error)
            res.send(error)
        } else {
            console.log('Email sukses terkirim!')
            res.send({
                status: 'Email terkirim'
            })
        }
    })
})

module.exports = app