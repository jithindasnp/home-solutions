import React from 'react'
import './About.css'

export default function About() {
    return (
        <>
            <div className="container-fluid text-white mt-3">
                <div className="row mb-5">
                    <h1 className='aboutTitle text-center mt-5 mb-3'>About us</h1>
                </div>
                <div className="row my-5 ">
                    <div className="col-sm-4 ">
                        <div className="aboutCards">
                            <i class="fa-brands aboutIcons  fa-rocketchat " ></i>
                            <h4>Tell us what your home needs</h4>
                            <p className='mt-5 aboutPara'>From routine maintenance and repairs to dream home renovations, we can help with any works — big or small.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="aboutCards">
                            <i class="fa-solid  aboutIcons fa-bolt"></i>
                            <h4>We’ll match you  personalized solutions</h4>
                            <p className='mt-3 aboutPara'>See your price and book services in an instant.We assure the best class works in a small time</p>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="aboutCards">
                            <i class="fa-brands aboutIcons  fa-connectdevelop"></i>
                            <h4>Start to finish, we’ve got you covered</h4>
                            <p className='mt-3 aboutPara'>When you book and pay with CareHome, you’re covered by our Happiness Guarantee. We’ll cover your works up to full purchase price, plus limited damage protection.</p>
                        </div>
                    </div>
                </div>
                <div className="row aboutSpace"></div>
            </div>
        </>
    )
}
