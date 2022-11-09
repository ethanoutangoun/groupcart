import React from "react";
import "./sign-in.css";

function signIn() {
  return (
    <div class="page">
      <div className="header-block">
        <h1>GroupCart</h1>
      </div>
      <div className="bottom-block">
        <div className="line">
        </div>
        <h2>Sign In</h2>
        <div className="sign-up-option-prompt">
          <li><h3>Need to create an account?</h3></li>
          <li><h4>Sign Up</h4></li>
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
        <div className="sign-in-btn">
          <h6>Sign In</h6>
        </div>
      </div>
    </div>
  );
};

export default signIn;
