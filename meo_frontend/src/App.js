import React, {Component} from 'react';

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
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
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
                        <a href="#" className="d-none d-sm-block btn_1 home_page_btn">Daftar</a>
                    </nav>
                </div>
            </div>
        </div>
      </header>


      {/* banner */}
      <section id='top' className="banner_part">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                    <div className="banner_img d-none d-lg-block">
                        <img src="img/banner_img.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Teknologi untuk Mobil Kesayangan</h1>
                            <p>
                                Manfaatkan teknologi <b><i>IoT</i></b> & <b><i>Machine Learning</i></b> untuk memantau kondisi mobil sekaligus memprediksi harga jual kembalinya.
                            </p>
                            <a href="#meoiot" className="btn_2">Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_7.png" alt="" className="feature_icon_1 custom-animation1"/>
        <img src="img/animate_icon/Ellipse_8.png" alt="" className="feature_icon_2 custom-animation2"/>
        <img src="img/animate_icon/Ellipse_1.png" alt="" className="feature_icon_3 custom-animation3"/>
        <img src="img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_4 custom-animation4"/>
        <img src="img/animate_icon/Ellipse_3.png" alt="" className="feature_icon_5 custom-animation5"/>
        <img src="img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_6 custom-animation6"/>
      </section>


      {/* usecase */}
      {/* <section className="use_sasu padding_top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="img/icon/feature_icon_1.png" alt=""/>
                            <h4>Fully Secured</h4>
                            <p>Made great fish shall beast, fourth land also Doesn
                                tree without lesser likeness he fruit of called gathering
                                day whose called were have </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="img/icon/feature_icon_2.png" alt=""/>
                            <h4>Unique Design</h4>
                            <p>Made great fish shall beast, fourth land also Doesn tree
                                without lesser likeness he fruit of called gathering day whose
                                called were have </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="img/icon/feature_icon_3.png" alt=""/>
                            <h4>A Volunteer</h4>
                            <p>Made great fish shall beast, fourth land also Doesn tree without
                                lesser likeness he fruit of called gathering day whose called were have </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_1.png" alt="" className="feature_icon_1 custom-animation1"/>
      </section> */}


      {/* about us */}
      <section id="meoiot" className="about_us section_padding">
        <div className="container my-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <img src="img/icon/Icon_1.png" alt=""/>
                        <h2>Meo IoT</h2>
                        <p>Manfaatkan <b><i>Meo IoT</i></b> untuk memantau kondisi terkini mobil Anda via internet. Parameter yang dapat Anda monitor antara lain: suhu, posisi, kelembaban, tekanan udara, posisi dan sensor lainnya yang dibenamkan dalam mobil.</p>
                        <a href="#meoml" className="btn_2">Selengkapnya</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="learning_img">
                        <img src="img/about_img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_1 custom-animation1"/>
      </section>

      {/* about us 2 */}
      <section id="meoml" className="about_us right_time">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="learning_img">
                        <img src="img/about_img_1.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <img src="img/icon/Icon_2.png" alt=""/>
                        <h2>Meo ML Price</h2>
                        <p>Prediksikan harga jual kembali mobil Anda berdasarkan model <b><i>Machine Learning</i></b> yang terukur, berdasarkan data harga di pasaran.</p>
                        <a href="#layanan" className="btn_2">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_1 custom-animation1"/>
      </section>


      {/* price */}
      <section id="layanan" className="pricing_part section_padding home_page_pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="mt-5 section_tittle text-center">
                        <h2>Layanan Kami</h2>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-car"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Dealer Workshop
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-house-damage"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Home Service
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-search-location"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Lokasi Cabang
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-book"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Katalog Toyota
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-calendar-check"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Simulasi Kredit
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="single_pricing_part">
                        <p><i className="fas fa-newspaper"></i></p>
                        <p className="mt-3"><a href="#" className="pricing_btn">
                            Berita Events
                        </a></p>
                    </div>
                </div>
            </div>
            <div className="my-4 row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                    <div className="single_pricing_part">
                        <img src='./img/meo_iot.png'/>
                        <p><a href="#" className="pricing_btn">
                            Meo IoT
                        </a></p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="single_pricing_part">
                        <img src='./img/meo_ml.png'/>
                        <p><a href="#" className="pricing_btn">
                            Meo ML Price
                        </a></p>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_2 custom-animation2"/>
      </section>


      {/* about us 3 */}
      <section className="review_part padding_bottom">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="review_img">
                        <img style={{transform: 'scaleX(-1)'}} src="img/about_img_ori.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="review_slider owl-carousel">
                        <div className="review_part_text">
                            <h2>Meo Testimoni 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Congue eu consequat ac felis donec. Praesent elementum facilisis leo vel fringilla est. Sem fringilla ut morbi tincidunt augue interdum</p>
                            <h3>Mr. XYZ, <span>Hardware Engineer XYZ Corp.</span> </h3>
                        </div>
                        <div className="review_part_text">
                            <h2>Meo Testimoni 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Congue eu consequat ac felis donec. Praesent elementum facilisis leo vel fringilla est. Sem fringilla ut morbi tincidunt augue interdum</p>
                            <h3>Mr. ABC, <span>Data Scientist ABC Sdn Bhd</span> </h3>
                        </div>
                        <div className="review_part_text">
                            <h2>Meo Testimoni 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Congue eu consequat ac felis donec. Praesent elementum facilisis leo vel fringilla est. Sem fringilla ut morbi tincidunt augue interdum</p>
                            <h3>Mr. KLM, <span>Software Engineer PT. KLM</span> </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_2 custom-animation2"/>
      </section>


      {/* subscribe us */}
      <section className="subscribe_part padding_bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="subscribe_part_text text-center">
                        <h2>Rasakan pengalaman baru bersama mobil kesayangan Anda</h2>
                        <div className="subscribe_form">
                            <form action="#">
                                <div className="form-row">
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" placeholder="Ketik email Anda..."/>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="subscribe_btn">
                                            <div className="btn_2 d-block">Berlangganan</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/animate_icon/Ellipse_5.png" alt="" className="feature_icon_2 custom-animation2"/>
      </section>


      {/* client logo */}
      {/* <section className="client_logo">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="client_logo_slider owl-carousel d-flex justify-content-between">
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_1.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_2.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_3.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_4.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_5.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_1.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="img/client_logo/client_logo_2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section> */}


      {/* footer */}
      <footer className="footer_part">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-4 col-lg-4">
                    <div className="single_footer_part">
                        <a href="index.html" className="footer_logo_iner"> <img src="img/footer_logo.png" alt="#"/> </a>
                        <p>
                        Manfaatkan teknologi <b><i>IoT</i></b> & <b><i>Machine Learning</i></b> untuk memantau kondisi mobil Anda sekaligus memprediksi harga jual kembalinya.
                        </p>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Menu 1</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Sub Menu 1</a></li>
                            <li><a href="">Sub Menu 2</a></li>
                            <li><a href="">Sub Menu 3</a></li>
                            <li><a href="">Sub Menu 4</a></li>
                            <li><a href="">Sub Menu 5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Menu 2</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Sub Menu 1</a></li>
                            <li><a href="">Sub Menu 2</a></li>
                            <li><a href="">Sub Menu 3</a></li>
                            <li><a href="">Sub Menu 4</a></li>
                            <li><a href="">Sub Menu 5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Menu 3</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Sub Menu 1</a></li>
                            <li><a href="">Sub Menu 2</a></li>
                            <li><a href="">Sub Menu 3</a></li>
                            <li><a href="">Sub Menu 4</a></li>
                            <li><a href="">Sub Menu 5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Menu 4</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Sub Menu 1</a></li>
                            <li><a href="">Sub Menu 2</a></li>
                            <li><a href="">Sub Menu 3</a></li>
                            <li><a href="">Sub Menu 4</a></li>
                            <li><a href="">Sub Menu 5</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-lg-8">
                    <div className="copyright_text">
                        <p>Hak cipta dilindungi &copy; 2019 Meo</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer_icon social_icon">
                        <ul className="list-unstyled">
                            <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="single_social_icon"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="single_social_icon"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#" className="single_social_icon"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" className="single_social_icon"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </footer>



      </div>
    )
  }
}

export default App;