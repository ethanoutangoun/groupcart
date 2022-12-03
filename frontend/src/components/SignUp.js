/* eslint-disable */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import "../styles/sign-up.css";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  if (error) {
    console.log(">>> Error found: " + error);
  }

  // function that actually submits the data to the backend
  const handleSubmit = async (e) => {
    //prevent default to prevent default refresh
    e.preventDefault();
    console.log(first, last, username, password);
    //signup function is defined in directory hooks
    const success = await signup(first, last, username, password);
    // this navigate returns user back to the home page
    if (success) {
      navigate("/profile-page");
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <div className="sign-page">
      <div className="form-parent">
        <div className="form-child">
          <h1 id="login-header">GroupCart 🛒</h1>
          <h1 id="login-subheader">Sign up</h1>
          {/* This is all from react-bootstrap */}
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="First Name"
                  placeholder=""
                  onChange={(e) => setFirst(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                {/* on change value sets the change */}
                <Form.Control
                  type="Last Name"
                  placeholder=""
                  onChange={(e) => setLast(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* this div just makes the submit button wider */}
            <div className="d-grid gap-2">
              <Button
                variant="success"
                type="submit"
                disabled={isLoading}
                onClick={(e) => handleSubmit(e)}
                className="sign-btn"
              >
                Sign Up
              </Button>
            </div>
          </Form>
          <div id="login-register-prompt">
            <p id="login-question">Already have an account?</p>
            <NavLink className="register-redirect" to="/sign-in">
              Login ↗
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
