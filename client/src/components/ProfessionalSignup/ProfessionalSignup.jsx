import React from 'react'
import './ProfessionalSignup.css'

export default function ProfessionalSignup() {
    return (
        <>
            <form className='mt-5 profForm'>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center my-5" >
                        <h3 className='formTitle'>Join as Professional</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control inp"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control inp"
                                    id="exampleInputPassword1"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Occupation
                                </label>
                                <div className="dropdown">
                                    <a
                                        className="btn btn-secondary dropdown-toggle w-100 bg-white text-dark text-end "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        select
                                    </a>
                                    <ul className="dropdown-menu scrollable-menu bg-dark text-white w-100">
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                ELECTRICIAN
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                PAINTER
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                PLUMBER
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                CARPENTER
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                CCTV TECHNITIAN
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                SMART TV TECHNITIAN
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            SMARTPHONE TECHNITIAN
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            COMPUTER TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            LAPTOP TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            TABLET TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            PRINTER TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            AIR CONDITIONER TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            REFRIGERATOR TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            WASHING MECHINE TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            GAS STOVE TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            WATER PURIFIER TECHNITIAN
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            IRONING
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            DRY CLEANING
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            FLOOR CLEANING
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            CAR WASH
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            GARDENING
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            CARE TAKER
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            HOME NURSE
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            MAID-SERVENT
                                            </a>
                                        </li>                                       
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                            COOK
                                            </a>
                                        </li>                                       
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Experience
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    City/Village
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    District
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Whatsapp
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Pincode
                                </label>
                                <input
                                    type="text"
                                    className="form-control inp"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn w-100 submitBtn">
                    Submit
                </button>
            </form>
        </>
    )
}
