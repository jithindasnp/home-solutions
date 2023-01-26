import React from "react";
import './Intro.css'
import gardenImg from '../../../src/images/boris-debusscher-9Rtp9uvTs3Q-unsplash.jpg'
import interiorImg from '../../../src/images/pexels-andrea-piacquadio-3769711.jpg'
import exteriorImg from '../../../src/images/pexels-emmanuel-ikwuegbu-7861955.jpg'
import otherImg from '../../../src/images/pexels-ketut-subiyanto-4246120.jpg'

export default function Intro() {
    return (
        <>
            <div className="container-fluid introContainer">
                <div className="row space"></div>
                <section className="taglineAndSearch">
                    <div className="row ">
                        <div className="col-sm-12  text-white d-flex flex-column">
                            <h5 className="tagline fs-2 text-center">"Perfect care for your home"</h5>
                            <div className="input-group justify-content-center">
                                <div className="form-outline text-center">
                                    <input type="search" id="form1" className="form-control searchInp h-50" />
                                    <label className="form-label ms-5 opacity-75" htmlFor="form1">
                                        Search for professionals near you
                                    </label>
                                </div>
                                <div className="col-sm-3 col p-0">
                                    <button type="button" className="searchBtn text-white h-100" style={{ backgroundColor: "orangered" }}>
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                                <label className="form-label opacity-75 d-flex justify-content-center" htmlFor="form1">
                                    Search for professionals near you
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="row my-5 justify-content-center  text-white">
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-plug-circle-check introIcons"></i><p className="introIconTitle mt-3">ELECTRICIAN</p></div>
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-faucet-drip introIcons"></i><p className="introIconTitle mt-3">PLUMBER</p></div>
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-seedling introIcons"></i><p className="introIconTitle mt-3">GARDNER</p></div>
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-brush introIcons"></i><p className="introIconTitle mt-3">PAINTER</p></div>
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-hammer introIcons"></i><p className="introIconTitle mt-3">CARPENTER</p></div>
                        <div className="col-4 col-sm-2 col-xl-1 d-flex flex-column align-items-center"><i class="fa-solid fa-kitchen-set introIcons"></i><p className="introIconTitle mt-3">COOK</p></div>
                    </div>
                </section>
                <section className="cards">
                    <div className="row mt-5">
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img src={interiorImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className=" p-0 m-0 mt-3">Interior</h4>
                                    <a href="#" className="btn  cardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img src={exteriorImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className=" p-0 m-0 mt-3">Exterior</h4>
                                    <a href="#" className="btn  cardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img src={gardenImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className=" p-0 m-0 mt-3">Garden</h4>
                                    <a href="#" className="btn  cardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center">
                            <div className="card  text-white">
                                <img src={otherImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className=" p-0 m-0 mt-3">Others</h4>
                                    <a href="#" className="btn  cardBtn">
                                        Hire now
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