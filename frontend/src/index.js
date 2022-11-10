import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import SignUp from "./components/sign-up";
import LearnMore from "./components/LearnMore";
import App from "./App";
//ReactDOM.render(<Profile />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
