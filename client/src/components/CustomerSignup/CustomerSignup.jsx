import React from 'react'
import './CustomerSignup.css'
import bg from '../../../src/images/home solutions bg.jpg'

export default function CustomerSignup({inp},{submit}) {
    return (
        <>
            <form className='mt-5 customerForm' onSubmit={submit}>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center my-5" >
                        <h3 className='formTitle'>Join as Customer</h3>
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
                                    onChange={inp}
                                    name="fullName"
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
                                    onChange={inp}
                                    name="email"
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
                                    onChange={inp}
                                    name="password"
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
                                    onChange={inp}
                                    name="city"
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
                                    onChange={inp}
                                    name="district"
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
                                    onChange={inp}
                                    name="phone"
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
                                    onChange={inp}
                                    name="whatsapp"
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
                                    onChange={inp}
                                    name="pincode"
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
