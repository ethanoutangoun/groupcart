import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import SignUp from "./components/sign-up";
import LearnMore from "./components/LearnMore";
import App from "./App";
//ReactDOM.render(<Profile />, document.getElementById('root'));
import { AuthContextProvider } from "./context/AuthContext";
import Orders from "./Orders/Orders"
import BuyPage from "./Orders/BuyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <BuyPage/>
    </BrowserRouter>
  </AuthContextProvider>
);
  //<BrowserRouter>
    // <LearnMore />
  //</BrowserRouter>
// );
