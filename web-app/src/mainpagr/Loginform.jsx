import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import UserServices from '../Services/UserServices';

function FormGroupExample() {
    const navigate = useNavigate();
    // const baseURL = "http://localhost:3000/users";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.get(baseURL)
        UserServices.getUser()
            .then((response) => {
                // Check if the entered username and password match any user in the response data
                const user = response.data.find((user) => user.email === email && user.password === password);

                if (user) {
                    // alert("Login success " ); 
                    // Redirect to the desired route after successful login
                    navigate("/a");
                } else {
                    alert('Login failed. Please check your username and password.');
                    console.log("error");
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });

        // try {
        //     // Fetch registered user data from the backend
        //     const response = await axios.get(baseURL);

        //     // Check if the provided email and password match any registered user's information
        //     const user = response.data.find(user => user.mail === email && user.pass === password);

        //     if (user) {
        //         // home page after successful login
        //         navigate("/a");
        //     } else {
        //         alert("Invalid email or password");
        //     }
        // } catch (error) {
        //     console.error("Login failed:", error);
        //     alert("Login failed. Please try again later.");
        // }
    }

    return (
        <div>
            <Container className='loginpage text-center'>
                <Row className="justify-content-center">
                    <Col xs={7}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                        <div className="text-center p-3">
                            <Button variant="outline-info" onClick={() => navigate("/go")} >Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FormGroupExample;
