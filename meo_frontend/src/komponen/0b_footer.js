import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
        <div>

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
                        <p>Copyright &copy; 2019 Meo</p>
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

export default Footer