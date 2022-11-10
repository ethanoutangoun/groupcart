import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import SignUp from "./components/sign-up";
import LearnMore from "./components/learn-more";
//import App from "./App";
//ReactDOM.render(<Profile />, document.getElementById('root'));
import Orders from "./Orders/Orders";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<BrowserRouter>
    <Orders />
  //</BrowserRouter>
);