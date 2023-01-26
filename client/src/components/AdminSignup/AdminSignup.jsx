import React from 'react'

export default function AdminSignup() {
    return (
        <>
            <form className='mt-5'>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center my-5" >
                        <h3 className='formTitle'>Join as Admin</h3>
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
                        <div className="col-sm-12 col-lg-12 col-12">
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
                    </div>
                </div>

                <button type="submit" className="btn w-100 submitBtn">
                    Submit
                </button>
            </form>

        </>
    )
}