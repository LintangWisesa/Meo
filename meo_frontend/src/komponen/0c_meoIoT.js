import React, {Component} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';

class MeoIot extends Component{
  
    constructor(props){
        super(props)
        this.state = {
            id: '', nama: '', email: '', password: '', telp: '', alamat: '', kota: '', 
            foto: '', file: '',
            mymobil: [], jmlmobil: 0, 
            iotlatest: '', iot: []
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
                axios.get(url + `/iotone`)
                .then((x)=>{
                    this.setState({
                        iotlatest: x.data[0],
                    })
                }).catch((x)=>{
                    console.log(x)
                })
                axios.get(url + `/iot`)
                .then((x)=>{
                    this.setState({
                        iot: x.data,
                    })
                }).catch((x)=>{
                    console.log(x)
                })
            }).catch((x)=>{
                console.log('no')
            })
        }).catch((x)=>{
            console.log('no')
        })
    }

    render(){

    var myMobil = this.state.mymobil.map((val, i)=>{
        return (
            <div key={i} className="col-lg-2 col-sm-4">
                <div className="single_pricing_part">
                    <button onClick={()=>{window.location.reload(`/meoIoT/${this.state.id}`)}}
                        style={{position:'absolute', zIndex:99, marginLeft:'-35px', marginTop:'-34px'}} 
                        className='btn btn-success btn-sm'>
                            <i className="fas fa-wifi"></i>
                    </button>
                    <a onClick={()=>{window.location.reload(`/meoIoT/${this.state.id}`)}}
                    style={{cursor:'pointer'}}>
                        <img src={val.cfoto}/>
                        <a className="pricing_btn">
                            {val.cmodel}
                        </a>
                        <p className="pricing_btn">
                            {val.cplat}
                        </p>
                    </a>
                </div>
            </div>
        )
    })

    var isuhu = []; var ilembab = []; var ipress = []; var ilux = []
    var iaccx = []; var iaccy = []; var iaccz = []
    var igx = []; var igy = []; var igz = []
    var time = []; var hari = []
    var dataIot = this.state.iot.map((val, i)=>{
        isuhu.push(val.isuhu); ilembab.push(val.ilembab); ipress.push(val.ipress); ilux.push(val.ilux)
        iaccx.push(val.iaccx); iaccy.push(val.iaccy); iaccz.push(val.iaccz)
        igx.push(val.igx); igy.push(val.igy); igz.push(val.igz)
        var tgl = val.itime.split('T')[0]
        var jam = val.itime.split('T')[1]
        hari.push(tgl)
        time.push(jam.split('.')[0])
        return 'ok'
    })

    const dataSuhu = {
        labels: time,
        datasets: [
          {
            label: `Suhu Ruang (°C)`,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(75,192,192,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: isuhu
          }
        ]
    };

    const dataLembab = {
        labels: time,
        datasets: [
          {
            label: `Kelembaban Udara (%)`,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(34, 167, 240,0.4)',
            borderColor: 'rgba(34, 167, 240,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(34, 167, 240,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(34, 167, 240,1)',
            pointHoverBorderColor: 'rgba(34, 167, 240,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ilembab
          }
        ]
    };

    const dataPress = {
        labels: time,
        datasets: [
          {
            label: `Tekanan Udara (kPa) - ${hari[0]}`,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 203, 5,0.4)',
            borderColor: 'rgba(255, 203, 5,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 203, 5,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 203, 5,1)',
            pointHoverBorderColor: 'rgba(255, 203, 5,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ipress
          }
        ]
    };

    const dataCahaya = {
        labels: time,
        datasets: [
          {
            label: `Intensitas Cahaya (lux) - ${hari[0]}`,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(191, 85, 236,0.4)',
            borderColor: 'rgba(191, 85, 236,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(191, 85, 236,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(191, 85, 236,1)',
            pointHoverBorderColor: 'rgba(191, 85, 236,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ilux
          }
        ]
    };

    const dataAcc = {
        labels: time,
        datasets: [
            {
                label: `Accelerometer X`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(46, 204, 113,0.4)',
                borderColor: 'rgba(46, 204, 113,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(46, 204, 113,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: iaccx
            },
            {
                label: `Accelerometer Y`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 148, 120,0.4)',
                borderColor: 'rgba(255, 148, 120,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 148, 120,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: iaccy
            },
            {
                label: `Accelerometer Z`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(191, 85, 236,0.4)',
                borderColor: 'rgba(191, 85, 236,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(191, 85, 236,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: iaccz
            }
        ]
    };

    const dataGyro = {
        labels: time,
        datasets: [
            {
                label: `Gyroscope X`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(46, 204, 113,0.4)',
                borderColor: 'rgba(46, 204, 113,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(46, 204, 113,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: igx
            },
            {
                label: `Gyroscope Y`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 148, 120,0.4)',
                borderColor: 'rgba(255, 148, 120,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 148, 120,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: igy
            },
            {
                label: `Gyroscope Z`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(191, 85, 236,0.4)',
                borderColor: 'rgba(191, 85, 236,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(191, 85, 236,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: igz
            }
        ]
    };

    return(
        <div>

        <ToastContainer style={{marginTop:'100px', fontSize:16}}/>
        
        {/* layanan */}
        <section id="layanan" className="pricing_part section_padding home_page_pricing">
            <div className="container">
                <div className="mt-5 section_tittle">
                    <h2><i className="fas fa-wifi"></i>&nbsp;&nbsp;Meo IoT</h2>
                    <p><b>Monitor kondisi Toyota kesayangan Anda</b></p>
                    <p>Jumlah Toyota Terdaftar: <b>{this.state.jmlmobil} mobil</b></p>
                </div>
                <div className="row">
                    {myMobil ? myMobil : <></>}
                </div>

                <hr className='my-5'/>

                <div className="mt-5 section_tittle">
                    <h2>Monitoring Kondisi Mobil</h2>
                    <p>Pemantauan sensor <b>XDK Bosch</b> di Toyota Anda | Update:&nbsp;
                    <b>{new Date(this.state.iotlatest.itime).getDate()}-</b>
                    <b>{new Date(this.state.iotlatest.itime).getMonth()}-</b>
                    <b>{new Date(this.state.iotlatest.itime).getFullYear()}</b>&nbsp;
                    <b>{new Date(this.state.iotlatest.itime).getHours()}:</b>
                    <b>{new Date(this.state.iotlatest.itime).getMinutes()} WIB</b>
                    </p>
                </div>
                <div className='row'>
                    
                    {/* suhu */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p>{this.state.iotlatest.isuhu}<span style={{fontSize:'30px'}}>°C</span></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       Suhu ruang
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* kelembaban */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p>{this.state.iotlatest.ilembab}<span style={{fontSize:'30px'}}>%</span></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       Kelembaban Udara
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* tekanan udara */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p>{this.state.iotlatest.ipress}<span style={{fontSize:'30px', textTransform:'lowercase'}}>kPa</span></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       Tekanan Udara
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* cahaya */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p>{this.state.iotlatest.ilux}<span style={{fontSize:'30px', textTransform:'lowercase'}}>lux</span></p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       Intensitas Cahaya
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* accelerometer */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p className="row">
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.iaccx} 
                                    </span>
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.iaccy} 
                                    </span>
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.iaccz} 
                                    </span>
                                </p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       x y z Accel
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* gyro */}
                    <div className="col-lg-2 col-sm-4">
                        <div className="single_pricing_part">
                            <a style={{cursor:'pointer'}}>
                                <p className="row">
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.igx} 
                                    </span>
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.igy} 
                                    </span>
                                    <span className="col-sm-4" style={{fontSize:'20px', textTransform:'lowercase'}}>
                                        {this.state.iotlatest.igz} 
                                    </span>
                                </p>
                                <p className="mt-3">
                                    <a className="pricing_btn">
                                       x y z Gyroscope
                                    </a>
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
                <hr className='my-5'/>

                <div className='row'>

                    {/* suhu */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Suhu Udara (°C)</h3>
                        <Line data={dataSuhu}/>
                    </div>

                    {/* lembab */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Kelembaban Udara (%)</h3>
                        <Line data={dataLembab}/>
                    </div>

                    {/* tekanan */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Tekanan Udara (kPa)</h3>
                        <Line data={dataPress}/>
                    </div>

                    {/* lux */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Intensitas Cahaya (lux)</h3>
                        <Line data={dataCahaya}/>
                    </div>

                    {/* acc */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Accelerometer</h3>
                        <Line data={dataAcc}/>
                    </div>

                    {/* gyro */}
                    <div className='col-sm-6 mb-5'>
                        <h3><i style={{color:'orange'}} className="fas fa-chart-line"></i>&nbsp;&nbsp;Gyroscope</h3>
                        <Line data={dataGyro}/>
                    </div>

                </div>
                {/* <hr className='my-3'/> */}

                <h3 className="mb-2"><i style={{color:'orange'}} className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Lokasi (GPS)</h3>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.41458394914827!2d106.84034734967263!3d-6.120930683840224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMTUuMyJTIDEwNsKwNTAnMjYuMSJF!5e0!3m2!1sen!2sid!4v1572702122212!5m2!1sen!2sid" 
                width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>

            </div>
            
            <img src="/img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_2 custom-animation2"/>

        </section>

        </div>
    )
  }
}

export default MeoIot