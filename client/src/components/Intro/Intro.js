import React from "react";
import './Intro.css'

export default function Intro() {
    return (
        <>
            <div className="container-fluid introContainer text-white d-flex justify-content-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h5 className="tagline fs-2 text-center">"Perfect care for your home"</h5>
                        <div className="input-group">
                            <div className="form-outline text-center">
                                <input type="search" id="form1" className="form-control searchInp"/>
                                <label className="form-label ms-5 opacity-50" htmlFor="form1">
                                     Search for professionals near you
                                </label>
                            </div>
                            <button type="button" className="btn btn-primary h-50">
                                <i className="fas fa-search" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}