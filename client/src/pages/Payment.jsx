import React, { useEffect, useState } from 'react'
import Address from '../components/Address/Address'
import DateAndTime from '../components/DateAndTime/DateAndTime'
import FinalPayment from '../components/FinalPayment/FinalPayment'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Payment() {
    const [count, setcount] = useState(0)
    
    const [proceedBtn, setproceedBtn] = useState({
        dateAndTime: true,
        address: false,
        final: false
    })
    

    const proceedBtnClicked = async () => {
        setcount(count + 1)      
    }
    useEffect(() => {
        if (count == 1) {
            setproceedBtn({
                dateAndTime: false,
                address: true,
                final: false
            })
        } else if (count == 2) {
            setproceedBtn({
                dateAndTime: false,
                address: false,
                final: true
            })
        }
    }, [count])

    return (
        <>
            <Navbar />
            <section>
                <div className="container ">
                    <div className="row mb-5">
                        <div className="col-12">
                            {/* <DateAndTime /> */}
                            {/* <Address/> */}
                            {/* <FinalPayment /> */}
                            {proceedBtn.dateAndTime == true ? <DateAndTime /> : proceedBtn.final == true ? <FinalPayment /> : proceedBtn.address == true ? <Address /> : <FinalPayment />}
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-sm-12 d-flex justify-content-center ">
                            <button class="btn proceedBtn w-100 fw-bold" onClick={proceedBtnClicked}>PROCEED</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}