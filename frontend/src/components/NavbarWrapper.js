import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarWrapper.css';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavbarWrapper = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>GroupCart 🛒</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile-page">Carts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {
          !user &&
          <Nav>
            <div className="btn-wrapper">
              <Button variant="primary" href="/sign-in">Sign In</Button>
            </div>
            <div className="btn-wrapper">
              <Button variant="info" href="/sign-up">Sign Up</Button>
            </div>
          </Nav>
        }
        {
        user &&
        <Nav>
          <div className="btn-wrapper">
            <Button variant="warning" onClick={logout}>Logout</Button>
          </div>
        </Nav>
        }
      </Container>
    </Navbar>
  );
}

export default NavbarWrapper;