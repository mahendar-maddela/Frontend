import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
// import axios from 'axios';
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { FaFontAwesome } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PatientService from '../Services/PatientService';


const Appointments = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  // useEffect(() => {
   const setPatientsData = () =>{

   
    // axios.get("http://localhost:3000/Patients")
    PatientService.getPatients()
      .then((response) => {
        setPatients(response.data);
        console.log(response.data);
      })
      .catch(error => {
        alert("error" + error);
      });
  }
  // , []);
  useEffect(()=>{
  setPatientsData() ;
  },[]);

  const removePatient = (id) => {
    // axios.delete(`http://localhost:3000/Patients/${id}`) 
    // axios.delete("http://localhost:3000/Patients/" + id)
    PatientService.removePatient(id)
      .then((response) => {
        alert("Deleted patient appointment");
        // setPatients(patients.filter(patient => patient.id !== id));
       setPatientsData();
      })
      .catch(error => {
        alert("Error: " + error);
      });
  }

  return (
    <div className='appaitpage'>
      <NavBar />
      <Link to="/book" className="appointment-button">
        Schedule Appointment
      </Link>

      <div className='appointmnet_details'>
        {patients.map((patient) => (
          <div className="card d-flex g-5 bookingBox" style={{ width: "18rem" }} key={patient.id}>
            <div className="card-body">
              <h4>Token: {patient.id} </h4>
              <h5 className="card-title">Name : {patient.patientname} </h5>
              <div> Phone Number : {patient.phoneNo} </div>
              <div> Age : {patient.age} </div>
              <div> Gender : {patient.gender} </div>
              <div> Location :{patient.location} </div>
              <div> Date : {patient.date} </div>
              <div> Time :{patient.time} </div>
              <div> {patient.comments} </div>

              {/* <button onClick={() => navigate('/editBooking/'+ patient.id)}> <FaEdit /> </button> */}
              <FaEdit onClick={() => navigate('/editBooking/' + patient.id)} className='editbutton' />


              {/* <button className="button btn-danger" onClick={() => removePatient(patient.id)}> <FaTrash /> </button> */}
              <MdDelete style={{ color: "red" }} onClick={() => removePatient(patient.id)} className='editbutton' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
