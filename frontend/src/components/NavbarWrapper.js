/* eslint-disable */

import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarWrapper.css";
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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={user ? "/profile-page" : "/sign-in"}>
              Carts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {!user && (
          <Nav>
            <Link to="/sign-in" className="btn-wrapper">
              <Button variant="primary">Sign In</Button>
            </Link>
            <Link to="/sign-up" className="btn-wrapper">
              <Button variant="info" href="/sign-up">
                Sign Up
              </Button>
            </Link>
          </Nav>
        )}
        {user && (
          <Nav>
            <div className="btn-wrapper">
              <Button variant="warning" onClick={logout}>
                Logout
              </Button>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarWrapper;
