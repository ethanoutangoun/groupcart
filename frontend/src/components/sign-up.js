import React from "react";
import "./sign-up.css";

function signUp() {
  return (
    <div class="page">
      <div className="header-block">
        <h1>GroupCart</h1>
      </div>
      <div className="bottom-block">
        <div className="line">
        </div>
        <h2>Sign Up</h2>
        <div className="sign-in-option-prompt">
          <li><h3>Already have an account?</h3></li>
          <li><h4>Sign In</h4></li>
        </div>

        <div className="firstname-text">
            <h5>First Name</h5>
        </div>
        <div className="lastname-text">
            <h5>Last Name</h5>
        </div>
        <div className="firstname-input">
        </div>
        <div className="lastname-input">
        </div>


        <div className="username-text">
          <h5>Username</h5>
        </div>
        <div className="username-input">
        </div>
        <div className="password-text">
          <h5>Password</h5>
        </div>
        <div className="password-input">
        </div>
        <div className="sign-up-btn">
          <h6>Sign Up</h6>
        </div>
      </div>
    </div>
  );
};

export default signUp;
