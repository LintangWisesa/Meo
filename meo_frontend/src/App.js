import React, {Component} from 'react';
import Banner from './komponen/0a_banner'
import Footer from './komponen/0b_footer'

class App extends Component{
  render(){
    return(
      <div>

        {/* header */}
        <header className="main_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand main_logo" href="#top">
                            <img src="img/logo.png" alt="logo"/>
                        </a>
                        <a className="navbar-brand single_page_logo" href="index.html"> <img src="img/footer_logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Beranda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#layanan">Layanan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pricing.html">Harga</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Berita
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="blog.html">Blog</a>
                                        <a className="dropdown-item" href="single-blog.html">Galeri</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Hubungi Kami</a>
                                </li>
                            </ul>
                        </div>
                        
                        <ul>
                        <li className="nav-item dropdown">
                            <a className="d-none d-sm-block btn_1 home_page_btn nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div className="mt-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="" data-toggle="modal" data-target="#signupModal">
                                    Signup
                                </a>
                                <a className="dropdown-item" href="" data-toggle="modal" data-target="#loginModal">
                                    Login
                                </a>
                            </div>
                        </li>
                        </ul>

                    </nav>
                </div>
            </div>
        </div>
      </header>

        <Banner/>
        
        <Footer/>

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
                    <input type="text" className="form-control" placeholder="Ketik nama Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* email */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ketik email Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* pass */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-unlock-alt"></i>
                        </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Ketik password ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button type="button" className="btn btn-success text-white">
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
                    <input type="text" className="form-control" placeholder="Ketik email Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* pass */}
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-unlock-alt"></i>
                        </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Ketik password ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button type="button" className="btn btn-success text-white">
                    <i class="fas fa-check-square"></i>&nbsp;&nbsp;Masuk
                </button>
            </div>
            </div>
        </div>
        </div>


      </div>
    )
  }
}

export default App;