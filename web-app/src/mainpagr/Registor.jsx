import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import UserServices from '../Services/UserServices';

function RegisterForm() {
  const navigate = useNavigate();
  // const baseURL = "http://localhost:3000/users";
 
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

// If user does not exist, proceed with registration
   
      const handleSubmit = (event) => {
        event.preventDefault();
       //  axios.post(baseURL, {
        UserServices.createUser({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          gender: gender
        })
        .then(() => {
          alert("Successfully Registered!");
          navigate("/ab");
        })
        .catch(error => {
          if (error.response && error.response.data && error.response.data.message) {
            alert("Error: " + error.response.data.message);
          } else {
            alert("An error occurred while processing your request.");
          }
        });
      };
      



  return (
    <div>
      <div className='register-form'>
        <Form onSubmit={handleSubmit}>
       <div className='p-2 d-flex justify-content-end'>
       <CloseButton onClick={() =>navigate('/ab')} />
       </div>
          <Row>
            <Col>
              <Form.Control placeholder="First name" value={firstname} onChange={handleFirstNameChange} required />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" value={lastname} onChange={handleLastNameChange} required />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check type="radio" label="Male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
              <Form.Check type="radio" label="Female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
            </Col>
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
