import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom'
import Profile from './ProfilePage/Profile';
import Order from './Orders/Orders'
import App from "./App";


//to  order page
// ReactDOM.render(<Order />, document.getElementById('root'));

//to Profile Page
// ReactDOM.render(<Profile />, document.getElementById('root'));



//getting to splash page, login, signup
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
