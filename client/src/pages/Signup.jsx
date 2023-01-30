import React, { useEffect, useState } from 'react'
import AdminSignup from '../components/AdminSignup/AdminSignup'
import CustomerSignup from '../components/CustomerSignup/CustomerSignup'
import Navbar from '../components/Navbar/Navbar'
import ProfessionalSignup from '../components/ProfessionalSignup/ProfessionalSignup'

export default function Signup() {
    
    const [signupToggle, setsignupToggle] = useState("customer")

    const signupChange = (data) => {
        console.log(data);
        setsignupToggle(data)
    }

    return (
        <>
            <Navbar />
            <section className="signup d-flex justify-content-center" style={{ marginBottom: "20rem" }}>
                <div className="container signupContainer text-white mt-5">
                    <div className="row ">
                        <div className="col-sm-6 col selectBar d-flex justify-content-center"><a className='signupTitleBar' href="#" onClick={() => { signupChange("customer") }}><h3 className='text-white mt-3'>Customer</h3></a></div>
                        <div className="col-sm-6 col selectBar  d-flex justify-content-center"><a className='signupTitleBar' href="#" onClick={() => { signupChange("Professional") }}><h3 className='text-white mt-3'>Professional</h3></a></div>
                    </div>
                </div>
                <div className="FormContainer container mt-5 text-white">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-sm-1"></div>
                        <div className="col-lg-8 col-sm-10 formCol  d-flex justify-content-center">
                            {signupToggle == "customer" ? <CustomerSignup /> : <ProfessionalSignup />}
                        </div>
                        <div className="col-lg-2 col-sm-1"></div>
                    </div>
                </div>

            </section>
        </>
    )
}
