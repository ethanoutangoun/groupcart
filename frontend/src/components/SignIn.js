import React from "react";
import { useState, useEffect } from "react";
import "../styles/sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useSignin } from "../hooks/useSignin"

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { signin, error, isLoading } = useSignin();

  const handleSubmit = async (e) => {
    //prevent default to prevent default refresh
    e.preventDefault();
    console.log(username, password);
    //signup function is defined in directory hooks
    await signin(username, password);
    // this navigate returns user back to the home page
    navigate("/");
  };

  return (
    <>
      <div className="form-parent">
        <div className="form-child">
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
                onClick={(e)=>{handleSubmit(e)}}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
