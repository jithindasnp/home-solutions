import React from 'react'
import './FinalPayment.css'

export default function FinalPayment() {
    return (
        <>
            <div className="container ">
                <div className="row justify-content-center mt-3">
                    <div className="col-lg-4 col-sm-12 mt-3   finalPaymentDetails p-3">
                        <div className="timeAndDate finalData mb-4 mt-3">
                            <h5 className='paymentSubTitle'>Scheduled Date&Time</h5>
                            <p className='paymentPtags'>25-01-2023   11:00AM-01:00PM</p>
                        </div>
                        <div className="address finalData mb-4">
                            <h5 className='paymentSubTitle'>Address</h5>
                            <p className='paymentPtags'>jkjdojoojojo</p>
                        </div>
                        <div className="serviceDetails finalData mb-4">
                            <h5 className='paymentSubTitle'>Service Details</h5>
                            <p className='paymentPtags'>jkjdojoojojo</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 col-sm-12 mt-3 finalPriceDetails d-flex flex-column  p-3">
                        <div className="cost ">
                            <h5 className='paymentSubTitle'>Total amount</h5>
                            <p className='paymentPtags'>Job cost:           ₹800/-</p>
                            <p className='paymentPtags'>Other charges:         nil</p>
                            <p className='paymentPtags'>--------------------------</p>
                            <p className='paymentPtags'>Total:               ₹800/-</p>
                        </div>
                        <div className="methods">
                            <h5 className='paymentSubTitle'>Payment Method</h5>
                            <>
                                <div className="form-check mt-3 paymentRadioBtn">
                                    <input
                                        className="form-check-input ms-1"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        defaultValue="option1"
                                        defaultChecked=""
                                        checked
                                    />
                                    <label className="form-check-label " htmlFor="exampleRadios1">
                                    <i class="fa-solid ms-2  fa-money-bill-1-wave text-primary"></i> PAY ON SITE
                                    </label>
                                </div>
                                <div className="form-check mt-3 paymentRadioBtn">
                                    <input
                                        className="form-check-input ms-1"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios2"
                                        defaultValue="option2"
                                    />
                                    <label className="form-check-label " htmlFor="exampleRadios2">
                                    <i class="fa-sharp ms-2 me-2 fa-solid fa-credit-card text-primary"></i> PAY ONLINE
                                    </label>
                                </div>
                            </>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
