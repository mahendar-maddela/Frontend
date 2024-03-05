

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

const ServicesPage = () => {
  return (
    <div className='servises_page bg-primary-subtle'>
    <NavBar />
    <Container >
      <h2>Our Services</h2>
      <Row >
        <Col className='bg-white '>
          <h3>Service 1</h3>
          <p>Description of Service 1.</p>
        </Col>
        <Col className='bg-white'>
          <h3>Service 2</h3>
          <p>Description of Service 2.</p>
        </Col>
      </Row>
      <Row>
        <Col className='bg-white'>
          <h3>Service 3</h3>
          <p>Description of Service 3.</p>
        </Col>
        <Col className='bg-white'>
          <h3>Service 4</h3>
          <p>Description of Service 4.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ServicesPage;
