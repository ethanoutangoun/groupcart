import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarWrapper.css';

const NavbarWrapper = () => {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>GroupCart</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Carts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <div className="btn-wrapper">
              <Button variant="primary">Sign In</Button>
            </div>
            <div className="btn-wrapper">
              <Button variant="info">Sign Up</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavbarWrapper;