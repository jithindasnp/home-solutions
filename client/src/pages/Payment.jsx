import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Payment() {

    return (
        <>
            <Navbar />
            <section>
                <div className="container text-white">
                    <div className="row">
                        <h3>BOOK NOW!</h3>
                        <div className="col-sm-6">
                            <div className="row">
                                <h4>SERVICE</h4>
                                <div className="col-sm-6">
                                    <p>Name</p>
                                    <p>Job</p>
                                    <p></p>
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}