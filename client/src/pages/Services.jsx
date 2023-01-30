import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { serviceImg } from '../imageData'
import { redirect, useNavigate } from 'react-router-dom'


export default function Services() {
    const navigate =useNavigate()

 const bookService=()=>{
    navigate('/bookService')
 }

    return (
        <>
            <Navbar />
            <section>
                <div className="container-fluid">
                    <div className="row homeMaintenance text-white">
                        <div className="serviceTitleDiv">
                            <h4 className='mt-5 mb-5 ms-5 servicesTitle'>HOME MAINTENANCE</h4>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column" onClick={bookService}>
                            <img className="img-fluid serviceImg " src={serviceImg.elec} height={130} width={130}></img>
                            <h5 className='mt-3 servicesText'>ELECTRICIAN</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg " src={serviceImg.paint} height={130} width={130}></img>
                            <h5 className='mt-3 servicesText'>PAINTER</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg " src={serviceImg.plumb} height={130} width={130}></img>
                            <h5 className='mt-3 servicesText'>PLUMBER</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg " src={serviceImg.carp} height={130} width={130}></img>
                            <h5 className='mt-3 servicesText'>CARPENTER</h5>
                        </div>
                    </div>
                    <div className="row ElectronicsRepair text-white mt-3">
                        <div className="serviceTitleDiv">
                            <h4 className='mt-5 mb-5 ms-5 servicesTitle'>ELECTRONICS REPAIR</h4>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.cctv} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>CCTV</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.tv} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>SMART TV</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.phone} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>SMARTPHONE</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.pc} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>DESKTOP COMPUTER</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.laptop} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>LAPTOP</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.tab} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>TABLET</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.printer} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>PRINTER</h5>
                        </div>
                    </div>
                    <div className="row homeApplianceRepair text-white mt-3">
                        <div className="serviceTitleDiv">
                            <h4 className='mt-5 mb-5 ms-5 servicesTitle'>HOME APPLIANCES REPAIR</h4>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.ac} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>AIR CONDITIONER</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.refrigerator} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>REFRIGERATOR</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.wash} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>WASHING MECHINE</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.stove} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>GAS STOVE</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.purifier} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>WATER PURIFIER</h5>
                        </div>
                    </div>
                    <div className="row others text-white mt-3">
                        <div className="serviceTitleDiv">
                            <h4 className='mt-5 mb-5 ms-5 servicesTitle'>OTHERS</h4>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.iron} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>IRON</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.dry} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>DRY CLEANING</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.floor} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>FLOOR CLEANING</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.car} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>CAR WASH</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.garden} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>GARDENING</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.careTaker} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>CARE TAKER</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.homeNurse} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>HOME NURSE</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.maid} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>MAID-SERVENT</h5>
                        </div>
                        <div className="col-sm-3 serImgCol d-flex align-items-center flex-column">
                            <img className="img-fluid serviceImg" src={serviceImg.cook} height={130} width={130}></img>
                            <h5 className='mt-3 mb-5 servicesText'>COOK</h5>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
