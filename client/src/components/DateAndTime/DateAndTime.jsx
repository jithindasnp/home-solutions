import React, { useState } from 'react'
import dayjs from 'dayjs';
import './DateAndTime.css'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



export default function DateAndTime() {
    const [value, setValue] = React.useState(dayjs('2023-01-07'));
    const [color, setcolor] = useState({
        first:false,
        second:false,
        third:false,
        fourth:false
    })
    
    return (
        <>
            <div className="container">
                <div className="row my-3 ">
                    <div className="col-sm-12 text-center dateSelectTitle"><h2>SELECT DATE AND TIMESLOT</h2></div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-6 col-md-6 col-sm-10 mb-3 col-12">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo="year"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField  {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-10 col-12">
                        <div  className="timeSlot mb-3 d-flex justify-content-center align-items-center" onClick={()=>{setcolor({first:true})}} style={color.first==true?{backgroundColor:"orangeRed"}:{backgroundColor:"white"}}><h4 className='fw-bold '>09:00AM - 11:00AM</h4></div>
                        <div className="timeSlot mb-3 d-flex justify-content-center align-items-center"  onClick={()=>{setcolor({second:true})}} style={color.second==true?{backgroundColor:"orangeRed"}:{backgroundColor:"white"}}><h4 className='fw-bold '>11:00AM - 01:00PM</h4></div>
                        <div className="timeSlot mb-3 d-flex justify-content-center align-items-center"  onClick={()=>{setcolor({third:true})}} style={color.third==true?{backgroundColor:"orangeRed"}:{backgroundColor:"white"}}><h4 className='fw-bold '>01:00AM - 03:00PM</h4></div>
                        <div className="timeSlot mb-3 d-flex justify-content-center align-items-center"  onClick={()=>{setcolor({fourth:true})}} style={color.fourth==true?{backgroundColor:"orangeRed"}:{backgroundColor:"white"}}><h4 className='fw-bold '>03:00AM - 05:00PM</h4></div>
                    </div>
                </div>
            </div>
        </>
    )
}