/* eslint-disable */

import React from "react";
import { useState } from "react";
import "../styles/sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignin } from "../hooks/useSignin";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signin, error, isLoading } = useSignin();

  if (error) {
    console.log(">>> Error found: " + error);
  }

  if (isLoading) {
    console.log(">>> isLoading status: " + isLoading);
  }

  const handleSubmit = async (e) => {
    //prevent default to prevent default refresh
    e.preventDefault();
    console.log("handling submit", username, password);
    //signup function is defined in directory hooks
    const success = await signin(username, password);
    console.log(success);
    if (success == true) {
      navigate("/profile-page");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="sign-page">
      <div className="form-parent">
        <div className="form-child">
          <h1 id="login-header">GroupCart 🛒</h1>
          <h1 id="login-subheader">Sign in</h1>
          {/* This is all from react-bootstrap */}
          <Form>
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
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="sign-btn"
              >
                Sign In
              </Button>
            </div>
          </Form>
          <div id="login-register-prompt">
            <p id="login-question">Don't have an account?</p>
            <NavLink className="login-redirect" to="/sign-up">
              Register ↗
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
