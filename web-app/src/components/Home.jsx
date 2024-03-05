import React from 'react'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';

import { Navigate, useNavigate } from 'react-router-dom';
import Booking from './Booking';



function Home() {
    const Navigator = useNavigate();

    return (
        <div className="homemain"> 
            <NavBar />
            <div >
                <div className="app-header">
                    <h1>Welcome to Our Doctor Appointment System</h1>
                    <p>Your health is our priority. Schedule an appointment today!</p>
                    {/* <a href="/appointment" className="appointment-button"> */}
                        Schedule Appointment
                    {/* </a> */}
                   <div>
                   <Button variant="success" onClick={()=>Navigator("/book")}>Book</Button>
                   </div>
                   
                
                </div>
            </div>



        </div>
    )
}

export default Home;