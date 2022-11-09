import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import signIn from "./components/sign-in";
import signUp from "./components/sign-up";
import learnMore from "./components/learn-more";
//import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  /* const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
//<li><StyledLink to='/sign-in'>Sign In</StyledLink></li>

          <nav>
            <ul>
              <li><Link to='/sign-in'>Sign In</Link></li>
            </ul>
          </nav>

        <div className="app-learn-more-button">
          <h3>Learn More</h3>
        </div>
        


                <nav>
          <ul className='sign-in-up'>
            <li><Link to='/sign-in'>Sign In</Link></li>
            <li><Link to='/sign-up'>Sign Up</Link></li>
          </ul>
        </nav>
        <nav>
          <ul className='learn-more'>
            <li><Link to='/learn-more'>Learn More</Link></li>
          </ul>
        </nav>
*/

  return (
    <>
      <div class="page">
        <div className="app-header-block">
          <li>
            <h1>GroupCart</h1>
          </li>
          <nav>
            <ul className="sign-in-up">
              <li>
                <Link className="sign-in-style" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li>
                <NavLink className="sign-up-style" to="/sign-up">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="app-sign-up-button"></div>
        </div>

        <div class="app-block">
          <div class="app-block-slogan-wrapper">
            <h2>Group shopping made easy</h2>
          </div>
          <nav>
            <ul className="learn-more">
              <li>
                <NavLink className="learn-more-style" to="/learn-more">
                  Learn More
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="app-learn-more-button"></div>
        </div>

        <div class="app-bottom-block">
          <div className="app-how-it-works-text">
            <h6>Get Started</h6>
          </div>
          <div className="app-how-it-works-subtext1">
            <h7>Sign Up</h7>
          </div>
          <div className="app-how-it-works-arrow1"></div>
          <div className="arrow"></div>
          <div className="app-how-it-works-subtext2">
            <h7>Create a GroupCart</h7>
          </div>
          <div className="app-how-it-works-arrow2"></div>
          <div className="arrow2"></div>
          <div className="app-how-it-works-subtext3">
            <h8>Start Shopping!</h8>
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<h1>GroupCart</h1>} />
          <Route path="/sign-in" element={<signIn />} />
          <Route path="/sign-up" element={<signUp/>} />
          <Route path="/learn-more" element={<learnMore/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;