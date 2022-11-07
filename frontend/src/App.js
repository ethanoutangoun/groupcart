
import './App.css';
import React, { useState, useEffect } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import SignIn from "./components/sign-in.js";
import SignUp from "./components/sign-up";
import LearnMore from "./components/learn-more";
import Splashpage from './components/splashpage';
//import styled from "styled-components";



function App() {
  const navigate = useNavigate()

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
    <><div class="page">
      <div className='app-header-block'>
          <li><h1>GroupCart</h1></li>
          <nav>
            <ul className='sign-in-up'>
              <li><NavLink className='sign-in-style' to='/sign-in'>Sign In</NavLink></li>
              <li><NavLink className='sign-up-style' to='/sign-up'>Sign Up</NavLink></li>
            </ul>
          </nav>
        <div className='app-sign-up-button'>
        </div>
      </div>


    </div>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Splashpage/>} />
          <Route
            path='/sign-in'
            element={<SignIn />} />
          <Route
            path='/sign-up'
            element={<SignUp />} />
          <Route
            path='/learn-more'
            element={<LearnMore/>} />
        </Routes>
      </div></>
    
  );
}

export default App;

