// import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LearnMore from "./components/LearnMore";
import SplashPage from "./components/SplashPage";
import Profile from "./ProfilePage/Profile";
import Orders from "./Orders/Orders";

//import styled from "styled-components";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/profile-page" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
