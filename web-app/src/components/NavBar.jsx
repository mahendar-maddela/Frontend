import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ServicesPage from './ServicesPage';
import Appointments from './Appointments';
import ContactInfoPage from './ContactInfoPage';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Navbar expand="lg " className="bg-body-tertiary bg-primary-subtle ">
        <Container fluid>
          <Navbar.Brand href="#">HealthHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/a">Home</Nav.Link>
              <Nav.Link href="/appointment">Appointments</Nav.Link>
              <Nav.Link href="/service">services</Nav.Link>
              <Nav.Link href="/contact" >
                   ContactUs
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/a' element={<Home />} />
        <Route exact path='/appointment' element={<Appointments />} />
        <Route exact path='/service' element={<ServicesPage />} />
        <Route exact path='/contact' element={<ContactInfoPage />} />
      </Routes>

    </>
  );
}

export default NavBar;