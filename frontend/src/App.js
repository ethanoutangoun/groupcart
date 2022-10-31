import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import signIn from "./components/signIn";
import signUp from "./components/signUp";
import learnMore from "./components/learnMore";


function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/sign-in'>Sign In</Link></li>
          <li><Link to='/sign-up'>Sign Up</Link></li>
          <li><Link to='/learn-more'>Learn More</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <h1>GroupCart</h1>
          }
        />
        <Route
          path='/sign-in'
          component={signIn}
        />
        <Route
          path='/sign-up'
          component={signUp}
        />
        <Route
          path='/learn-more'
          component={learnMore}
        />
      </Routes>
    </div>
  );
}

export default App;


/*
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
*/
