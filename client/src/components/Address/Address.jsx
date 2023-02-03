import React from 'react'
import './Address.css'

export default function Address() {
    return (
        <>
            <div className="container text-white">
                <div className="row ">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <h2 className='addressTitle'>CHOOSE ADDRESS</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                        <form className='addressForm'>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    FULL NAME
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    HOUSE NAME/APARTMENT NAME
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    PHONE NUMBER
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    ADDRESS
                                </label>
                                <textarea className="form-control" placeholder="Address" id=""></textarea>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
