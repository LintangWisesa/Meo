import React, {Component} from 'react';

class Profil extends Component{
  render(){

    const reg = new Date(this.props.user.utglreg)
    const tglreg = reg.getDate() + '-' + (reg.getMonth() + 1) + '-' + reg.getFullYear()
    const update = new Date(this.props.user.utglupdate)
    const tglupdate = update.getDate() + '-' + (update.getMonth() + 1) + '-' + update.getFullYear()

    return(
        <div>
            
        {/* layanan */}
        <section id="layanan" className="pricing_part section_padding home_page_pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="mt-5 section_tittle">
                            <h2>Profil Saya</h2>
                            <p>Akun Terdaftar: <b>{tglreg}</b> | Terakhir update: <b>{tglupdate}</b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_pricing_part">
                            <img style={{width:'200px', height:'200px'}} 
                            src='./img/user.png' alt=''/>
                            <br/>
                            {/* <p className="mt-3"><a href="#" className="pricing_btn">
                                Dealer Workshop
                            </a></p> */}
                            <label className='btn btn-warning text-white' style={{cursor: 'pointer'}} for="upload-photo">
                                <i className="fas fa-camera"></i>&nbsp;&nbsp;Upload Foto
                            </label>
                            <input style={{opacity: 0, position: 'absolute', zIndex: -1}} type="file" name="photo" id="upload-photo" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-6">
                        
                        {/* nama */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-id-card"></i>
                                </span>
                            </div>
                            <input value={this.props.user.unama ? this.props.user.unama : ''}
                            style={this.props.user.unama ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="text" className="form-control" placeholder="Ketik nama Anda ..." 
                            aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        {/* email */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input value={this.props.user.uemail ? this.props.user.uemail : ''}
                            style={this.props.user.uemail ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="text" className="form-control" placeholder="Ketik email Anda ..." 
                            aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>

                        {/* password */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-unlock-alt"></i>
                                </span>
                            </div>
                            <input value={this.props.user.upassword ? this.props.user.upassword : ''}
                            style={this.props.user.upassword ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="password" className="form-control" placeholder="Ketik password Anda ..." 
                            aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>

                        {/* alamat */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                            </div>
                            <input value={this.props.user.ualamat ? this.props.user.ualamat : ''}
                            style={this.props.user.ualamat ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="text" className="form-control" placeholder="Ketik alamat Anda ..." 
                            aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>

                        {/* kota */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-map-marked-alt"></i>
                                </span>
                            </div>
                            <input value={this.props.user.ukota ? this.props.user.ukota : ''}
                            style={this.props.user.ukota ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="password" className="form-control" placeholder="Ketik kota Anda ..." 
                            aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>

                        {/* telp */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="bg-dark input-group-text" id="basic-addon1">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                            </div>
                            <input value={this.props.user.utelp ? this.props.user.utelp : ''}
                            style={this.props.user.utelp ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                            type="text" className="form-control" placeholder="Ketik no. telephone Anda ..." 
                            aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>

                    </div>
                </div>

                <hr className='mt-5'></hr>
                
                <div className="mt-5 section_tittle">
                    <h2>Toyota Saya</h2>
                </div>
                <div className="row">
                    
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a href='' data-toggle="modal" data-target="#addMobilModal">
                                <p><i className="fas fa-car-side"></i></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                    Tambah Mobil
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <img src="img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_2 custom-animation2"/>

        </section>


        {/* modal add mobil */}
        <div style={{marginTop:'150px'}} className="modal fade" id="addMobilModal" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header bg-warning">
                <h5 className="text-white modal-title" id="exampleModalLabel">
                    Tambahkan Mobil ke Profil
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
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input 
                    // value={this.state.email} onChange={this.emailInput} 
                    type="text" className="form-control" placeholder="Ketik email Anda ..." 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i className="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button
                type="button" className="btn btn-success text-white">
                    <i className="fas fa-plus-square"></i>&nbsp;&nbsp;Tambah
                </button>
            </div>
            </div>
        </div>
        </div>


        </div>
    )
  }
}

export default Profil