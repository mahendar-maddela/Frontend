import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
// import axios from 'axios';
import PatientService from '../Services/PatientService';

const Booking = () => {
    const navigate = useNavigate();

    const [patientName, setPatientName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');

    const handlePatientNameChange = (event) => {
        setPatientName(event.target.value);
    }
    const handlePhoneNoChange = (event) => {
        setPhoneNo(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }
    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.post("http://localhost:3000/Patients", {
            PatientService.createPatient({
            patientname: patientName,
            phoneNo: phoneNo,
            age: age,
            gender: gender, 
            location: location, 
            date: date, 
            time: time, 
            comments: comments 
        }).then((response) => {
            console.log(response);
            console.log("Booking successfully completed");
            // console.log(response.age)
            navigate("/appointment");
        }).catch(error => {
            alert("Error: " + error.response.data.message);
        });
    }

    return (
        <div>
            <div className='booking-form'>
                <div className=' d-flex justify-content-end text-center '>
                    <CloseButton onClick={() => navigate('/a')} /> 
                </div>
                <h2 className='text-center'>Doctor Booking Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="patientName">
                        <Form.Label>Patient Name:</Form.Label>
                        <Form.Control type="text" onChange={handlePatientNameChange} value={patientName} required />
                    </Form.Group>
                    <Form.Group controlId="phoneNo">
                        <Form.Label>Phone No:</Form.Label>
                        <Form.Control type="number" onChange={handlePhoneNoChange} value={phoneNo} required />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Age:</Form.Label>
                        <Form.Control type="number" onChange={handleAgeChange} value={age} required />
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender:</Form.Label>
                        <Form.Control as="select" onChange={handleGenderChange} value={gender} required>
                            <option value="">Select Gender</option>
                            <option value  ="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type="text" onChange={handleLocationChange} value={location} required />
                    </Form.Group>
                    <Form.Group controlId="preferredDate">
                        <Form.Label>Preferred Date:</Form.Label>
                        <Form.Control type="date" onChange={handleDateChange} value={date} required />
                    </Form.Group>
                    <Form.Group controlId="preferredTime">
                        <Form.Label>Preferred Time:</Form.Label>
                        <Form.Control type="time" onChange={handleTimeChange} value={time} required />
                    </Form.Group>
                    <Form.Group controlId="comments">
                        <Form.Label>Comments:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleCommentsChange} value={comments} />
                    </Form.Group>
                    <div className='text-center p-2'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Booking;
