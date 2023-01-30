import React from 'react'
import './Footer.css'
import logo from '../../../src/images/care_home LOGO.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid ">
                    <div className="row "></div>
                    <div className="row mt-5 fw-bold ">
                        <div className="col-sm-2 ms-3">
                            <h5 className='footerLinks'>Popular cities</h5>
                        </div>
                        <div className="col-sm-8">
                            <div className="row px-3 justify-content-end">
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Calicut</p></a></div>
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Kannur</p></a></div>
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Wayanad</p></a></div>
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Thrissur</p></a></div>
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Kochi</p></a></div>
                                <div className="col-md-2 col-sm-4 col-4 col  footerText"><a className='footerLinks' href='/services'><p>Trivandrum</p></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-2 col">
                            <img src={logo} className="img-fluid footerLogo ms-3 mt-5" alt="" width={100} height={100} />
                        </div>
                        <div className="col-lg-7 col-sm-7">
                            <p className='fs-5 mt-5 footerPara'>CareHome brings the best of Home Maintenance and Repairs, Utility, Lifestyle, Health and Beauty Services to the customer,
                                right where they are, all through an easy to use platform.</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="row mt-5">
                                <div className="col-sm-3 col fs-2 mt-3"><i class="fa-brands footerIcons fa-whatsapp"></i></div>
                                <div className="col-sm-3 col fs-2 mt-3"><i class="fa-brands footerIcons fa-facebook"></i></div>
                                <div className="col-sm-3 col fs-2 mt-3"><i class="fa-brands footerIcons fa-twitter"></i></div>
                                <div className="col-sm-3 col fs-2 mt-3"><i class="fa-brands footerIcons fa-instagram"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyrightRow  mt-5 mb-3">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <p className='copyright mt-3'> Copyright © 2023, CareHome. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
