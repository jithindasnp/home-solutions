import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Services() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-fluid">
                    <div className="row homeMaintenance">
                        <div className="col-sm-2">
                            <i class="fa-solid fa-brush serviceIcon"></i>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
