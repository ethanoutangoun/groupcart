/* eslint-disable */

import React from "react";
import "./learn-more.css";
import { NavLink } from "react-router-dom";
import NavbarWrapper from './NavbarWrapper';
import { useAuthContext } from "../hooks/useAuthContext";

function LearnMore() {
  const { user } = useAuthContext();

  return (
    <div class="page">
      <NavbarWrapper />
      <main className="purpose-content">
        <div className="purpose-header">
          <h1>Our Purpose</h1>
          <p className="purpose-text">GroupCart provides a seamless platform for coordinating payment and aquisition of shared goods between roomates, families, and organizations.</p>
          <p className="purpose-text">Easily keep track of orders and connect with others.</p>
          <p className="purpose-text">Interested? Join GroupCart today!</p>
          <div className="purpose-footer">
            <NavLink className="purpose-link hover-underline-animation" to={ user ? "/profile-page" : "/sign-in"}>
              <p className="purpose-text join-link">Login ↗</p>
            </NavLink>
            <NavLink className="purpose-link hover-underline-animation" to={ user ? "/profile-page" : "/sign-up"}>
              <p className="purpose-text join-link">Register ↗</p>
            </NavLink>
            <p className="purpose-footer-text">
              🛒💸
            </p>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default LearnMore;
