import React from 'react'
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

const Mainview = () => {
    const Navigate = useNavigate();
    return (
        <div className='mainpage d-flex'>
            <div className="vertical-line"></div> 
        <div className='sidenames p-3'>
        
            <h2 className="orange-text">Book</h2>
            <h2 className="orange-text">Confirm</h2>
            <h2 className="orange-text" >Done!</h2>
        </div>
        <div className='headline_mainpage'>
            <h3>Fast and Easy Appointment Booking at Your Fingertips</h3>
            <div className="button-container d-flex justify-content-center"> {/* New div for button container */}
               <div> <Button variant="success" type="submit" onClick={() => Navigate("/ab")}>
                    LOGIN
                </Button></div>
            </div>
        </div>
    </div>
    
    )
}

export default Mainview;