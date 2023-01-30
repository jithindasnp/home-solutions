import React from "react";
import { cardImg, serviceImg } from "../../imageData";
import './Intro.css'

export default function Intro() {
    return (
        <>
            <div className="container-fluid introContainer">
                <div className="row space"></div>
                <section className="taglineAndSearch">
                    <div className="row ">
                        <div className="col-sm-12  text-white d-flex flex-column">
                            <div className="taglineDiv">
                                <h5 className="tagline fs-2 text-center">"Perfect care for your home"</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-9 col-10  p-0 searchInpCol">
                                    <input type="search" className="searchInp " />
                                </div>
                                <div className="col-sm-3 col p-0">
                                    <button type="button" className="searchBtn text-white h-100" style={{ backgroundColor: "orangered" }}>
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                                <label className="form-label formLabel  d-flex justify-content-center" htmlFor="form1">
                                    Search for professionals near you
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="row my-5 justify-content-center  text-white">
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.elec} height={130} width={130}></img><p className="introIconTitle mt-3">ELECTRICIAN</p></div>
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.plumb} height={130} width={130}></img><p className="introIconTitle mt-3">PLUMBER</p></div>
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.garden} height={130} width={130}></img><p className="introIconTitle mt-3">GARDNER</p></div>
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.paint} height={130} width={130}></img><p className="introIconTitle mt-3">PAINTER</p></div>
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.carp} height={130} width={130}></img><p className="introIconTitle mt-3">CARPENTER</p></div>
                        <div className="introIconCol col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center "><img className="img-fluid " src={serviceImg.cook} height={130} width={130}></img><p className="introIconTitle mt-3">COOK</p></div>
                    </div>
                </section>
                <section className="cards">
                    <div className="row mt-5">
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img height={180} src={cardImg.home} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <a href="#" className="btn w-100 cardBtn d-flex align-items-center justify-content-center">
                                        HOME MAINTENANCE
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img height={180} src={cardImg.electronics} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a href="#" className="btn w-100 cardBtn d-flex align-items-center justify-content-center">
                                        ELECTRONICS REPAIR
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img height={180} src={cardImg.appliance} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a href="#" className="btn w-100 cardBtn d-flex align-items-center justify-content-center">
                                        HOME APPLIANCE REPAIR
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img height={180} src={cardImg.others} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a href="#" className="btn w-100 cardBtn d-flex align-items-center justify-content-center">
                                        OTHERS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}