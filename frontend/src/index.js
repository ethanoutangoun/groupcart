<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import SignUp from "./components/sign-up";
import LearnMore from "./components/learn-more";
//import App from "./App";
//ReactDOM.render(<Profile />, document.getElementById('root'));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom'
import Profile from './ProfilePage/Profile';
import Order from './Orders/Orders'
import App from "./App";
>>>>>>> main


//to  order page
// ReactDOM.render(<Order />, document.getElementById('root'));

//to Profile Page
// ReactDOM.render(<Profile />, document.getElementById('root'));



//getting to splash page, login, signup
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  //<BrowserRouter>
    <LearnMore />
  //</BrowserRouter>
);
=======
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
>>>>>>> main
