import React, {  useState } from 'react'
import CustomerSignup from '../components/CustomerSignup/CustomerSignup'
import Navbar from '../components/Navbar/Navbar'
import ProfessionalSignup from '../components/ProfessionalSignup/ProfessionalSignup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const [customerSignup, setcustomerSignup] = useState({})

    const [signupToggle, setsignupToggle] = useState("customer")

    const signupChange = (data) => {
        setsignupToggle(data)
    }

    const inpChange = (e) => {
        const { name, value } = e.target
        setcustomerSignup({ ...customerSignup, [name]: value })

    }

    const signupSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/signup/customerSignup', customerSignup).then((data) => {
            if (data) {
                navigate('/login')
            } else {
                navigate('/signup')
            }
            console.log(data);
        })
    }
    console.log(customerSignup);
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
                            {signupToggle == "customer" ? <CustomerSignup inp={inpChange} sumbit={signupSubmit} /> : <ProfessionalSignup />}
                        </div>
                        <div className="col-lg-2 col-sm-1"></div>
                    </div>
                </div>

            </section>
        </>
    )
}
