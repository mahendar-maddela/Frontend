

import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import NavBar from './NavBar';

const ContactInfoPage = () => {
  return (
    <div className='contact_page'>
        <NavBar />
        <Container>
      <h2>Contact Information</h2>

      {/* Social Media Links */}
      <Row>
        <Col >
          <h3>Social Media Links</h3>
          <ListGroup>
            <ListGroup.Item>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Address */}
        <Col>
          <h3>Our Address</h3>
          <Card>
            <Card.Body>
              <Card.Text>
                123 Main Street <br />
                City, Country <br />
                Zip Code
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Number */}
      <Row className="mt-4">
        <Col>
          <h3>Contact Number</h3>
          <Card>
            <Card.Body>
              <Card.Text>
                Phone: 9666124136
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactInfoPage;
