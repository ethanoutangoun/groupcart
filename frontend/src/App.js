// import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LearnMore from "./components/LearnMore";
import SplashPage from "./components/SplashPage"
import Profile from "./ProfilePage/Profile"
import Orders from "./Orders/Orders"

//import styled from "styled-components";

function App() {
  // const navigate = useNavigate();

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
      <div>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/learn-more" element={<LearnMore/>} />
          <Route path = "/profile-page" element = {< Profile/>}/>
          <Route path = "/orders" element = {<Orders />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;