import React, {Component} from 'react';
import axios from 'axios'
import SimpleStorage from "react-simple-storage";
import { Route, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './komponen/0b_footer'
import Banner from './komponen/0a_banner'
import Profil from './komponen/0c_profil'
import ToyotaCar from './komponen/0d_toyotacar'

class App extends Component{

    constructor(){
        super()
        this.state = {
            host: 'http://localhost:1234',
            hostML: 'http://localhost:5000',
            statusLogin: false, user: '',
            nama: '', email: '', password: ''
        }
    }

    namaInput = (event) => {
        this.setState({nama: event.target.value});
    }
    emailInput = (event) => {
        this.setState({email: event.target.value});
    }
    passInput = (event) => {
        this.setState({password: event.target.value});
    }

    signup = () => {
        axios.post(`${this.state.host}/signup`, {
            unama: this.state.nama,
            uemail: this.state.email,
            upassword: this.state.password
        }).then((x)=>{
            if (x.data.status == 'ok'){
                // this.login()
                axios.post(`${this.state.host}/email`, {
                    nama: this.state.nama,
                    email: this.state.email,
                }).then((x)=>{
                    toast.success('🎉 Selamat, akun Anda sukses terdaftar! Cek email & silakan login!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    window.location.replace(`/`)
                }).catch((x)=>{
                    toast.error(`Gagal signup 😭 Silakan coba lagi 🙏`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                })
            } else {
                toast.error(`Gagal signup 😭 Silakan coba lagi 🙏`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }).catch((x)=>{
            toast.error(`Maaf, gangguan koneksi 😭 Silakan coba lagi 🙏`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        })
    }

    login = () => {
        axios.post(`${this.state.host}/login`, {
            uemail: this.state.email,
            upassword: this.state.password
        }).then((x)=>{
            if (x.data.statusLogin == 'ok'){
                toast.success(`😎 Login sukses! Welcome ${this.state.nama}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                this.setState({
                    user: x.data.user,
                    statusLogin: true,
                    nama: '', email: '', password: ''
                })
                window.location.replace(`/profil/${this.state.user.uid}`)
            } else {
                toast.error(`Gagal login 😭 Silakan coba lagi 🙏`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }).catch((x)=>{
            toast.error(`Maaf, gangguan koneksi 😭 Silakan coba lagi 🙏`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        })
    }

    logout = () => {
        toast.success(`Logout sukses! Sayonara... 🤗`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        this.setState({
            user: '',
            statusLogin: false
        })
        window.location.replace("/")
    }

  render(){
    return(
      <div>

        <SimpleStorage parent={this} />
        <ToastContainer style={{marginTop:'100px', fontSize:16}}/>

        {/* header */}
        <header className="main_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand main_logo" href="/">
                            <img src="/img/logo.png" alt="logo"/>
                        </a>
                        <a className="navbar-brand single_page_logo" href="/"> <img src="/img/footer_logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Beranda</a>
                                </li>
                                
                                {
                                    this.state.statusLogin
                                    ?
                                    (
                                    <li className="nav-item dropdown">
                                        <a href="#layanan" className="nav-link dropdown-toggle" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Layanan
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/">
                                                Meo IoT
                                            </a>
                                            <a className="dropdown-item" href="/">
                                                Meo ML Price
                                            </a>
                                        </div>
                                    </li>
                                    )
                                    :
                                    (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#layanan">Layanan</a>
                                    </li>
                                    )
                                }
                                
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Harga</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Berita
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">
                                            Berita
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            Events
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Hubungi Kami</a>
                                </li>
                            </ul>
                        </div>
                        
                        <ul>

                        {
                            this.state.statusLogin 
                            ?
                            (<li className="nav-item dropdown">
                                <a className="d-none d-sm-block btn_1 home_page_btn nav-link dropdown-toggle" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.user.unama}
                                </a>
                                <div className="mt-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href={`/profil/${this.state.user.uid}`}>
                                        Profil Saya
                                    </a>
                                    <a className="dropdown-item" href={`/mytoyota/${this.state.user.uid}`}>
                                        Toyota Saya
                                    </a>
                                    <a style={{cursor:'pointer'}} onClick={this.logout} className="dropdown-item">
                                        Logout
                                    </a>
                                </div>
                            </li>) 
                            :
                            (<li className="nav-item dropdown">
                                <a className="d-none d-sm-block btn_1 home_page_btn nav-link dropdown-toggle" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                                </a>
                                <div className="mt-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a style={{cursor:'pointer'}} className="dropdown-item" data-toggle="modal" data-target="#signupModal">
                                        Signup
                                    </a>
                                    <a style={{cursor:'pointer'}} className="dropdown-item" data-toggle="modal" data-target="#loginModal">
                                        Login
                                    </a>
                                </div>
                            </li>)
                        }

                        </ul>

                    </nav>
                </div>
            </div>
        </div>
      </header>

        {/* modal signup */}
        <div style={{marginTop:'150px'}} className="modal fade" id="signupModal" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header bg-warning">
                <h5 className="text-white modal-title" id="exampleModalLabel">
                    Signup
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className='text-white'>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                
                <center>
                    <h3 className='my-1'>Untuk mendaftar, silakan lengkapi form berikut:</h3>
                </center>

                {/* nama */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                    <input value={this.state.nama} onChange={this.namaInput} 
                    style={this.state.nama ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                    type="text" className="form-control" placeholder="Ketik nama Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* email */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input value={this.state.email} onChange={this.emailInput} 
                    style={this.state.email ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                    type="email" className="form-control" placeholder="Ketik email Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* pass */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-unlock-alt"></i>
                        </span>
                    </div>
                    <input value={this.state.password} onChange={this.passInput} 
                    style={this.state.password ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                    type="password" className="form-control" placeholder="Ketik password ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button onClick={this.signup} 
                type="button" className="btn btn-success text-white">
                    <i class="fas fa-check-square"></i>&nbsp;&nbsp;Daftar
                </button>
            </div>
            </div>
        </div>
        </div>

        {/* modal login */}
        <div style={{marginTop:'150px'}} className="modal fade" id="loginModal" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header bg-warning">
                <h5 className="text-white modal-title" id="exampleModalLabel">
                    Login
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className='text-white'>&times;</span>
                </button>
            </div>
            <div className="modal-body">

                {/* email */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input value={this.state.email} onChange={this.emailInput}
                    style={this.state.email ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                    type="email" className="form-control" placeholder="Ketik email Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* pass */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-unlock-alt"></i>
                        </span>
                    </div>
                    <input value={this.state.password} onChange={this.passInput} 
                    style={this.state.password ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                    type="password" className="form-control" placeholder="Ketik password ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button onClick={this.login}
                type="button" className="btn btn-success text-white">
                    <i class="fas fa-check-square"></i>&nbsp;&nbsp;Masuk
                </button>
            </div>
            </div>
        </div>
        </div>
        <div>
            {/* <Route exact path="/" component={Banner}/> */}
            <Route exact path="/" render={(props) => <Banner {...props} user={this.state.user} host={this.state.host}/>}/>
            <Route path="/profil/:uid" render={(props) => <Profil {...props} user={this.state.user} host={this.state.host}/>}/>
            <Route path="/mytoyota/:uid" render={(props) => <ToyotaCar {...props} user={this.state.user} host={this.state.host}/>}/>
        </div>
        
        <Footer/>
      </div>
    )
  }
}

export default withRouter(App);