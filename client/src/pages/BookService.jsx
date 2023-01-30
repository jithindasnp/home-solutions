import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { locationImg } from '../imageData';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: '#edeae6',
    border: '2px solid #000',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    '@media (max-width: 576px)': {
        height: "100%",
        width: "100vw",
        overflow: 'scroll',
    },
    '@media (max-width: 350px)': {
        height: "100%",
        overflow: 'scroll',
    }
};

export default function BookService() {
    const [location, setlocation] = useState("LOCATION")

    useEffect(() => {
        handleOpen()
    }, [])


    const locationChange = (data) => {
        setlocation(data)
        handleClose()
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Navbar />
            <section>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-12"><p><i class="fa-solid fa-circle-xmark text-danger fs-2 mb-3 modalClose" onClick={handleClose}></i></p></div>
                                </div>
                                <div className="row">
                                    <div onClick={() => { locationChange("CALICUT") }} className="col-sm-4 col-12   d-flex align-items-center flex-column locations ">
                                        <img className='img-fluid locationImage' src={locationImg.calicut} alt="" />
                                        <h5 className='my-3 fw-bold'>CALICUT</h5>
                                    </div>
                                    <div onClick={() => { locationChange("KANNUR") }} className="col-sm-4 col-12   d-flex align-items-center flex-column  locations">
                                        <img className='img-fluid locationImage' src={locationImg.kannur} alt="" />
                                        <h5 className='my-3 fw-bold'>KANNUR</h5>
                                    </div>
                                    <div onClick={() => { locationChange("WAYANAD") }} className="col-sm-4 col-12   d-flex align-items-center flex-column  locations">
                                        <img className='img-fluid locationImage' src={locationImg.wayanad} alt="" />
                                        <h5 className='my-3 fw-bold'>WAYANAD</h5>
                                    </div>
                                    <div onClick={() => { locationChange("THRISSUR") }} className="col-sm-4 col-12 mt-5  d-flex align-items-center flex-column  locations">
                                        <img className='img-fluid locationImage' src={locationImg.thrissur} alt="" />
                                        <h5 className='my-3 fw-bold'>THRISSUR</h5>
                                    </div>
                                    <div onClick={() => { locationChange("KOCHI") }} className="col-sm-4 col-12 mt-5  d-flex align-items-center flex-column  locations">
                                        <img className='img-fluid locationImage' src={locationImg.kochi} alt="" />
                                        <h5 className='my-3 fw-bold'>KOCHI</h5>
                                    </div>
                                    <div onClick={() => { locationChange("TRIVANDRUM") }} className="col-sm-4 col-12 mt-5  d-flex align-items-center flex-column  locations">
                                        <img className='img-fluid locationImage' src={locationImg.trivandrum} alt="" />
                                        <h5 className='my-3 fw-bold'>TRIVANDRUM</h5>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
                <div className="container-fluid text-white">
                    <div className="row ">
                        <div className="col-lg-10 col-7 d-flex justify-content-end"> </div>
                        <div className="col-lg-2 col-5 ">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-danger dropdown-toggle dropBtn"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onClick={handleOpen}
                                >
                                    {location}
                                </button>

                            </div>


                        </div>
                    </div>
                    <div className="row my-5">

                        <div className="col-lg-4 d-flex justify-content-center">
                            <div className="card profCard mt-5" style={{ width: "18rem" }}>
                                <img height={"200px"} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body d-flex align-items-center flex-column">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <a href="/payment" className="btn w-75 profCardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <div className="card profCard mt-5" style={{ width: "18rem" }}>
                                <img height={"200px"} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body d-flex align-items-center flex-column">
                                    <h5 className="card-title ">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <a href="/payment" className="btn w-75 profCardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <div className="card profCard mt-5" style={{ width: "18rem" }}>
                                <img height={"200px"} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body d-flex align-items-center flex-column">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <a href="/payment" className="btn w-75 profCardBtn">
                                        Hire now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}