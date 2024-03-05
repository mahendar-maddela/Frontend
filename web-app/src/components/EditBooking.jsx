import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
// import axios from 'axios';
import PatientService from '../Services/PatientService';

const EditBooking = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [patientName, setPatientName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');

    useEffect(() => {
        // Fetch existing booking data using the ID from params
        // axios.get(`http://localhost:3000/Patients/${id}`)

        // axios.get('http://localhost:3000/Patients/' + id)
        PatientService.getPatientsById(id)
            .then(response => {
                const bookingData = response.data;
                setPatientName(bookingData.patientname);
                setPhoneNo(bookingData.phoneNo);
                setAge(bookingData.age);
                setGender(bookingData.gender);
                setLocation(bookingData.location);
                setDate(bookingData.date);
                setTime(bookingData.time);
                setComments(bookingData.comments);
            })
            .catch(error => {
                console.error("Error fetching booking data: " + error);
            });
    }, [id]);

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

        // Update booking data
        // axios.put('http://localhost:3000/Patients/' + id, {
        PatientService.updatePatient(id, {
            patientname: patientName,
            phoneNo: phoneNo,
            age: age,
            gender: gender,
            location: location,
            date: date,
            time: time,
            comments: comments
        }).then(() => {
            console.log("Booking successfully updated");
            navigate("/appointment");
        }).catch(error => {
            alert("Error: " + error);
        });
    }
    // useEffect(() => {
    //     if (id);
    //     getBooking();

    // }, [id])
    return (
        <div>
            <div className='booking-form'>
                <div className=' d-flex justify-content-end text-center '>
                    <CloseButton onClick={() => navigate('/appointment')} />
                </div>
                <h2 className='text-center'>Edit Booking Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="patientName">
                        <Form.Label>Patient Name:</Form.Label>
                        <Form.Control type="text" onChange={handlePatientNameChange} value={patientName} />
                    </Form.Group>
                    <Form.Group controlId="phoneNo">
                        <Form.Label>Phone No:</Form.Label>
                        <Form.Control type="number" onChange={handlePhoneNoChange} value={phoneNo} />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Age:</Form.Label>
                        <Form.Control type="number" onChange={handleAgeChange} value={age} />
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender:</Form.Label>
                        <Form.Control as="select" onChange={handleGenderChange} value={gender} >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type="text" onChange={handleLocationChange} value={location} />
                    </Form.Group>
                    <Form.Group controlId="preferredDate">
                        <Form.Label>Preferred Date:</Form.Label>
                        <Form.Control type="date" onChange={handleDateChange} value={date} />
                    </Form.Group>
                    <Form.Group controlId="preferredTime">
                        <Form.Label>Preferred Time:</Form.Label>
                        <Form.Control type="time" onChange={handleTimeChange} value={time} />
                    </Form.Group>
                    <Form.Group controlId="comments">
                        <Form.Label>Comments:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleCommentsChange} value={comments} />
                    </Form.Group>
                    <div className='text-center p-2'>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditBooking;
