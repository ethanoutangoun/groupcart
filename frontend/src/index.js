import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//import Profile from "./ProfilePage/Profile";
import App from "./App";
//ReactDOM.render(<Profile />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
