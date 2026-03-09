import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center text-white">
          <img
            src="https://raw.githubusercontent.com/yourusername/yourrepo/main/public/img/nysl_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="NYSL Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/30x30/003366/ffffff?text=NYSL';
            }}
          />
          <span>Northside Youth Soccer League</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
              end
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
            >
              About
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
            >
              Contact
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/rules" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
            >
              Rules
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/games" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
            >
              Game Schedule
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/register" 
              className={({ isActive }) => isActive ? 'active fw-bold' : ''}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;