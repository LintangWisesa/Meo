import React, {Component} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MeoML extends Component{
  
    constructor(props){
        super(props)
        this.state = {
            tipe: '', model: [
                {nama:'Calya', foto:'/img/toyota/calya.png', thMin:2016}, 
                {nama:'Sienta', foto:'/img/toyota/sienta.png', thMin:2016},
                {nama:'Avanza', foto:'/img/toyota/avanza.png', thMin:2004},
                {nama:'Veloz', foto:'/img/toyota/veloz.png', thMin:2012},
                {nama:'Venturer', foto:'/img/toyota/venturer.png', thMin:2016},
                {nama:'Voxy', foto:'/img/toyota/voxy.png', thMin:2017},
                {nama:'Kijang Innova', foto:'/img/toyota/kijanginnova.png', thMin:2004},
                {nama:'Alphard', foto:'/img/toyota/alphard.png', thMin:2005},
                {nama:'Vellfire', foto:'/img/toyota/vellfire.png', thMin:2008}
            ], 
            thMin: 0, modelPilih: '', fotoPilih: '', plat: '', seat: '', th: '', info: '', km: '', bbm: '', transmisi:'',
            id: '', nama: '', email: '', password: '', telp: '', alamat: '', kota: '', 
            foto: '', file: '',
            mymobil: [], jmlmobil: 0,
            hapusModel: '', hapusId: '', hapusPlat: '', hapusFoto: '',
            bbmpilih: '', transmisipilih: '',
            hasilPrediksi: '', hasilPrediksiMyCar: '',
        }
    }

    componentDidMount(){
        var url = this.props.host
        axios.get(url + `/user/${this.props.match.params.uid}`)
        .then((x)=>{
            this.setState({
                id: x.data[0].uid,
                nama: x.data[0].unama,
                email: x.data[0].uemail,
                password: x.data[0].upassword,
                telp: x.data[0].utelp,
                alamat: x.data[0].ualamat,
                kota: x.data[0].ukota,
                foto: x.data[0].ufoto,
            })
            axios.get(url + `/car/${this.props.match.params.uid}`)
            .then((x)=>{
                this.setState({
                    mymobil: x.data,
                    jmlmobil: x.data.length
                })
            }).catch((x)=>{
                console.log('no')
            })
        }).catch((x)=>{
            console.log('no')
        })
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
    telpInput = (event) => {
        this.setState({telp: event.target.value});
    }
    alamatInput = (event) => {
        this.setState({alamat: event.target.value});
    }
    kotaInput = (event) => {
        this.setState({kota: event.target.value});
    }

    platInput = (event) => {
        this.setState({plat: event.target.value});
    }
    seatInput = (event) => {
        this.setState({seat: event.target.value});
    }
    thInput = (event) => {
        this.setState({th: event.target.value});
    }
    kmInput = (event) => {
        this.setState({km: event.target.value});
    }
    bbmInput = (event) => {
        this.setState({bbm: event.target.value});
    }
    transInput = (event) => {
        this.setState({transmisi: event.target.value});
    }
    infoInput = (event) => {
        this.setState({info: event.target.value});
    }

    // prediksi mobil bebas
    prediksiHarga = () => {
        this.setState({
            hasilPrediksi: '', hasilPrediksiMyCar: ''
        })
        var modelPilih = this.state.modelPilih ? this.state.modelPilih : 'Avanza'
        var foto = this.state.fotoPilih ? this.state.fotoPilih : '/img/toyota/avanza.png'
        var km = this.state.km ? this.state.km : 0 
        var bbm = this.state.bbmpilih ? this.state.bbmpilih : 'bensin'
        var transmisi = this.state.transmisipilih ? this.state.transmisipilih : 'manual'
        var th = this.state.th ? this.state.th : 2019
        var url = this.props.hostML
        axios.post(url + '/prediksi', {
            km: km,
            tahun: th,
            nama: modelPilih,
            bbm: bbm,
            transmisi: transmisi,
            foto: foto
        }).then((x)=>{
            if(x.data.response == 'ok'){
                this.setState({
                    hasilPrediksi: x.data
                })
                toast.success(`🎉 Prediksi sukses dilakukan 👍`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.error(`😭 Maaf, gagal memprediksi. Coba lagi nanti 👍`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }).catch((x)=>{
            toast.error(`😭 Maaf, gagal memprediksi. Coba lagi nanti 👍`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        })
    }

    // prediksi my cars (toyota saya)
    prediksiMobil = (val) => {
        this.setState({
            hasilPrediksi: '', hasilPrediksiMyCar: ''
        })
        // alert(val.cplat + val.cfoto + val.cmodel + val.ctipe + val.cth + val.cbbm + val.cseat + val.ckm + val.cinfo)
        var modelPilih = val.cmodel
        var plat = val.cplat
        var seat = val.cseat
        var info = val.cinfo
        var foto = val.cfoto
        var km = val.ckm
        var bbm = val.cbbm
        var transmisi = val.ctransmisi
        var th = val.cth
        var url = this.props.hostML
        axios.post(url + '/prediksi', {
            km: km,
            tahun: th,
            nama: modelPilih,
            bbm: bbm,
            transmisi: transmisi,
            foto: foto
        }).then((x)=>{
            if(x.data.response == 'ok'){
                this.setState({
                    hasilPrediksiMyCar: x.data
                })
                toast.success(`🎉 Prediksi sukses dilakukan 👍`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.error(`😭 Maaf, gagal memprediksi. Coba lagi nanti 👍`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }).catch((x)=>{
            toast.error(`😭 Maaf, gagal memprediksi. Coba lagi nanti 👍`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        })
    }

    render(){

    const reg = new Date(this.props.user.utglreg)
    const tglreg = reg.getDate() + '-' + (reg.getMonth() + 1) + '-' + reg.getFullYear()
    const update = new Date(this.props.user.utglupdate)
    const tglupdate = update.getDate() + '-' + (update.getMonth() + 1) + '-' + update.getFullYear()
    
    var listMobil = this.state.model.map((val, i)=>{
        return (
            <a className="dropdown-item" style={{cursor:'pointer'}} 
            onClick={(e)=>{this.setState({modelPilih: val.nama, fotoPilih: val.foto, thMin: val.thMin})}}>
                <img src={val.foto} style={{width:'30px', height:'20px'}}/>&nbsp;&nbsp;{val.nama}
            </a>
        )
    })

    var myMobil = this.state.mymobil.map((val, i)=>{
        return (
            <div key={i} className="col-lg-2 col-sm-4">
                <div className="single_pricing_part">
                    {
                        val.ctipe == 'MPV'
                        ?
                        <>
                        <button 
                        onClick={() => {this.prediksiMobil(val)}}
                        style={{position:'absolute', zIndex:99, marginLeft:'-35px', marginTop:'-34px'}} 
                        className='btn btn-success btn-sm'>
                            <i className="fas fa-money-bill-wave"></i>
                        </button>
                        <a onClick={() => {this.prediksiMobil(val)}}
                        style={{cursor:'pointer'}}>
                            <img src={val.cfoto}/>
                            <a className="pricing_btn">
                                {val.cmodel}
                            </a>
                            <p className="pricing_btn">
                                {val.cplat}
                            </p>
                        </a>
                        </>
                        :
                        <>
                        <button
                        onClick={()=>{
                            toast.error(`Mohon maaf, sementara hanya Toyota MPV yang dapat diprediksi 🙏`, {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        }}
                        style={{position:'absolute', zIndex:99, marginLeft:'-35px', marginTop:'-34px'}} 
                        className='btn btn-danger btn-sm'>
                            <i className="fas fa-money-bill-wave"></i>
                        </button>
                        <a 
                        onClick={()=>{
                            toast.error(`Mohon maaf, sementara hanya Toyota MPV yang dapat diprediksi 🙏`, {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        }}
                        style={{cursor:'pointer'}}>
                            <img src={val.cfoto}/>
                            <a className="pricing_btn">
                                {val.cmodel}
                            </a>
                            <p className="pricing_btn">
                                {val.cplat}
                            </p>
                        </a>
                        </>
                    }
                </div>
            </div>
        )
    })

    var outputPrediksi = (
        <>
        <div className="mt-5 section_tittle">
            <h2>Hasil Prediksi</h2>
            <p><b>Model machine learning multivariate linear regression</b></p>
        </div>
        <div className='row'>
            <div className="col-lg-2 col-sm-4">
                <div className="single_pricing_part">
                    <button 
                    onClick={()=>{this.setState({hasilPrediksi: '', hasilPrediksiMyCar: ''})}}
                    style={{position:'absolute', zIndex:99, marginLeft:'-35px', marginTop:'-34px'}} 
                    className='btn btn-danger btn-sm'>
                        <i className="fas fa-times"></i>
                    </button>
                    <a style={{cursor:'pointer'}}>
                        <img src={this.state.hasilPrediksi.foto}/>
                        <a className="pricing_btn">
                            {this.state.hasilPrediksi.pnama}
                        </a>
                        <p className="pricing_btn">
                            {this.state.hasilPrediksi.pth}
                        </p>
                    </a>
                </div>
            </div>
            <div className="col-sm-8">
                <b className="alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-car"></i>&nbsp;&nbsp;{this.state.hasilPrediksi.pnama}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-cog"></i>&nbsp;&nbsp;{this.state.hasilPrediksi.ptransmisi}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="far fa-calendar"></i>&nbsp;&nbsp;{this.state.hasilPrediksi.pth}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-gas-pump"></i>&nbsp;&nbsp;{this.state.hasilPrediksi.pbbm}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-tachometer-alt"></i>&nbsp;&nbsp;{this.state.hasilPrediksi.pkm} <small>km</small>
                </b>
                <br/>
                <hr className='my-4'></hr>
                <b style={{fontSize:'30px'}} className="alert alert-success">
                    <i className='fas fa-money-bill-wave'></i>&nbsp;&nbsp;
                    Rp {this.state.hasilPrediksi ? this.state.hasilPrediksi.zprediksi.toLocaleString().replace(/,/g, '.') : this.state.hasilPrediksi}
                </b>
            </div>
        </div>
        </>
    )

    var outputPrediksiMyCar = (
        <>
        <div className="mt-5 section_tittle">
            <h2>Hasil Prediksi</h2>
            <p><b>Model machine learning multivariate linear regression</b></p>
        </div>
        <div className='row'>
            <div className="col-lg-2 col-sm-4">
                <div className="single_pricing_part">
                    <button 
                    onClick={()=>{this.setState({hasilPrediksi: '', hasilPrediksiMyCar: ''})}}
                    style={{position:'absolute', zIndex:99, marginLeft:'-35px', marginTop:'-34px'}} 
                    className='btn btn-danger btn-sm'>
                        <i className="fas fa-times"></i>
                    </button>
                    <a style={{cursor:'pointer'}}>
                        <img src={this.state.hasilPrediksiMyCar.foto}/>
                        <a className="pricing_btn">
                            {this.state.hasilPrediksiMyCar.pnama}
                        </a>
                        <p className="pricing_btn">
                            {this.state.hasilPrediksiMyCar.pth}
                        </p>
                    </a>
                </div>
            </div>
            <div className="col-sm-8">
                <b className="alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-car"></i>&nbsp;&nbsp;{this.state.hasilPrediksiMyCar.pnama}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-cog"></i>&nbsp;&nbsp;{this.state.hasilPrediksiMyCar.ptransmisi}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="far fa-calendar"></i>&nbsp;&nbsp;{this.state.hasilPrediksiMyCar.pth}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-gas-pump"></i>&nbsp;&nbsp;{this.state.hasilPrediksiMyCar.pbbm}
                </b>
                <b className="ml-2 alert alert-warning">
                    <i style={{color:'orange'}} className="fas fa-tachometer-alt"></i>&nbsp;&nbsp;{this.state.hasilPrediksiMyCar.pkm} <small>km</small>
                </b>
                <br/>
                <hr className='my-4'></hr>
                <b style={{fontSize:'30px'}} className="alert alert-success">
                    <i className='fas fa-money-bill-wave'></i>&nbsp;&nbsp;
                    Rp {this.state.hasilPrediksiMyCar ? this.state.hasilPrediksiMyCar.zprediksi.toLocaleString().replace(/,/g, '.') : this.state.hasilPrediksiMyCar}
                </b>
            </div>
        </div>
        </>
    )

    return(
        <div>

        <ToastContainer style={{marginTop:'100px', fontSize:16}}/>
        
        {/* layanan */}
        <section id="layanan" className="pricing_part section_padding home_page_pricing">
            <div className="container">
                <div className="mt-5 section_tittle">
                    <h2><i className="fas fa-brain"></i>&nbsp;&nbsp;Meo ML Price</h2>
                    <p><b>Prediksi harga jual kembali Toyota kesayangan Anda</b></p>
                    <p>Jumlah Toyota Terdaftar: <b>{this.state.jmlmobil} mobil</b></p>
                </div>
                <div className="row">
                    
                    {myMobil ? myMobil : <></>}

                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}} data-toggle="modal" data-target="#addMobilModal">
                                <p><i className="fas fa-money-bill-wave"></i></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                    Prediksi Harga
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className='my-5'/>

                {/* output prediksi */}
                {this.state.hasilPrediksi ? outputPrediksi : <></>}

                {/* output prediksi mycar */}
                {this.state.hasilPrediksiMyCar ? outputPrediksiMyCar : <></>}

            </div>
            <img src="/img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_2 custom-animation2"/>

        </section>


        {/* modal prediksi mobil */}
        <div style={{marginTop:'150px'}} className="modal fade" id="addMobilModal" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header bg-warning">
                <h5 className="text-white modal-title" id="exampleModalLabel">
                    <i className='fas fa-money-bill-wave'></i>&nbsp;&nbsp;Prediksi Harga Toyota
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className='text-white'>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                
                <div className='row'>
                    {/* model */}
                    {
                        this.state.model[0]
                        ?
                        (
                            <div className="dropdown col-sm-4">
                                <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.modelPilih ? <><img src={this.state.fotoPilih} style={{width:'30px', height:'20px'}}/>&nbsp;&nbsp;{this.state.modelPilih}</> : <><i className="fas fa-car"></i>&nbsp;&nbsp;Pilih Model</>}
                                </button>
                                <div className="ml-5 dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {listMobil}
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="dropdown col-sm-4">
                                <button className="disabled btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-car"></i>&nbsp;&nbsp;Pilih Model
                                </button>
                            </div>
                        )
                    }

                    {/* bbm */}
                    <div className="dropdown col-sm-4">
                        <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-gas-pump"></i>&nbsp;&nbsp;{this.state.bbmpilih ? this.state.bbmpilih.toUpperCase() : 'Jenis BBM'}
                        </button>
                        <div className="ml-5 dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" style={{cursor:'pointer'}} 
                            onClick={(e)=>{this.setState({bbmpilih: 'bensin'})}}>
                                Bensin
                            </a>
                            <a className="dropdown-item" style={{cursor:'pointer'}} 
                            onClick={(e)=>{this.setState({bbmpilih: 'diesel'})}}>
                                Diesel
                            </a>
                        </div>
                    </div>

                    {/* transmisi */}
                    <div className="dropdown col-sm-4">
                        <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-cog"></i>&nbsp;&nbsp;{this.state.transmisipilih ? this.state.transmisipilih.toLocaleUpperCase() : 'Jenis Transmisi'}
                        </button>
                        <div className="ml-5 dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" style={{cursor:'pointer'}} 
                            onClick={(e)=>{this.setState({transmisipilih: 'manual'})}}>
                                Manual
                            </a>
                            <a className="dropdown-item" style={{cursor:'pointer'}} 
                            onClick={(e)=>{this.setState({transmisipilih: 'otomatis'})}}>
                                Otomatis
                            </a>
                        </div>
                    </div>

                </div>
                
                <div className="row">
                    
                    {/* km */}
                    <div className="col-sm-6 input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fas fa-tachometer-alt"></i>
                            </span>
                        </div>
                        <input 
                        value={this.state.km} onChange={this.kmInput} 
                        style={this.state.km ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                        type="number" className="form-control" placeholder="Jarak ditempuh (km)" 
                        aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    {/* th */}
                    <div className="col-sm-6 input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="far fa-calendar"></i>
                            </span>
                        </div>
                        <input 
                        value={this.state.th} onChange={this.thInput} 
                        style={this.state.th ? {fontWeight:'bold'} : {fontStyle:'italic'}}
                        type="number" min={this.state.thMin} max='2019' className="form-control" placeholder="Tahun ..." 
                        aria-label="Username" aria-describedby="basic-addon1"/>
                        {
                            this.state.modelPilih
                            ?
                            (
                            <i style={{position:'fixed', marginTop:'40px', color:'red'}}>
                                * untuk <b>{this.state.modelPilih}</b> silakan isi tahun <b>> {this.state.thMin}</b>
                            </i>
                            )
                            :
                            <></>
                        }
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <button onClick={()=>{this.setState({modelPilih:'', th:'', km: '', transmisipilih: '', bbmpilih: '', thMin: ''})}}
                type="button" className="btn btn-danger" data-dismiss="modal">
                    <i className="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button
                type="button" 
                onClick={this.prediksiHarga}
                className="btn btn-success text-white" data-dismiss="modal">
                    <i className="fas fa-plus-square"></i>&nbsp;&nbsp;Prediksi
                </button>
            </div>
            </div>
        </div>
        </div>

        {/* modal delete mobil */}
        <div style={{marginTop:'150px'}} className="modal fade" id="delMobilModal" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header bg-warning">
                <h5 className="text-white modal-title" id="exampleModalLabel">
                    Hapus Mobil
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className='text-white'>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <h4>
                    <img width='50px' src={this.state.hapusFoto}/>
                    &nbsp;Yakin ingin menghapus <b>{this.state.hapusModel} {this.state.hapusPlat.toUpperCase()}</b> ?
                </h4>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                    <i className="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                </button>
                <button
                onClick={()=>{this.hapusMobil(this.state.hapusId)}}
                type="button" className="btn btn-success text-white">
                    <i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Hapus
                </button>
            </div>
            </div>
        </div>
        </div>


        </div>
    )
  }
}

export default MeoML