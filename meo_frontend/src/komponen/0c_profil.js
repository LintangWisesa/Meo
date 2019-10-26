import React, {Component} from 'react';

class Profil extends Component{
  render(){
    return(
        <div>
            
        {/* layanan */}
        <section id="layanan" className="pricing_part section_padding home_page_pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="mt-5 section_tittle text-center">
                            <h2>Profil Saya</h2>
                            <p>Update informasi seputar diri Anda</p>
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

        </div>
    )
  }
}

export default Profil