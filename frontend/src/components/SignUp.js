import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import "../styles/sign-up.css";



function SignUp() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //the hook that calls the signin API

  const signup = async(first, last, username, password) => {
    
    axios.post('http://localhost:3001/signup', ())
  }





  // function that actually submits the data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(first, last, username, password)

  }

  return (
    <>
    <div className = "form-parent">
      <div className = "form-child">
        {/* This is all from react-bootstrap */}
        <Form>
          <Row className = "mb-3">
            <Form.Group as={Col} controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="First Name" placeholder="" onChange = {(e) => setFirst(e.target.value)}/>
            </Form.Group>

            <Form.Group as = {Col} controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              {/* on change value sets the change */}
              <Form.Control type="Last Name" placeholder="" onChange = {(e) => setLast(e.target.value)}/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" onChange = {(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
          </Form.Group>

          {/* this div just makes the submit button wider */}
          <div className = "d-grid gap-2">
            <Button variant="success" type="submit" onClick = {(e) => handleSubmit(e)}>
              Sign Up
            </Button>
          </div>


        </Form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
