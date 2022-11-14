import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import NavbarWrapper from './NavbarWrapper';
import "../styles/splash-page.css";

const SplashPage = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  console.log(user);
  return (
    <div class="page">
      <div className="app-header-block">
        <NavbarWrapper />
      </div>

      <div class="app-block">
        <div class="app-block-slogan-wrapper">
          <h2 className="main-title">Group shopping made easy</h2>
        </div>
        <nav>
          <ul className="learn-more">
            <li>
              <NavLink className="learn-more-style" to="/learn-more">
                Learn More
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="app-learn-more-button"></div>
      </div>

      <div class="app-bottom-block">
        <div className="app-how-it-works-text">
          <h6 className="get-started">Get Started</h6>
        </div>
        <div className="app-how-it-works-subtext1">
          <h7 className="how-it-works-text">Sign Up</h7>
        </div>
        <div className="app-how-it-works-arrow1"></div>
        <div className="arrow"></div>
        <div className="app-how-it-works-subtext2">
          <h7 className="how-it-works-text">Create a GroupCart</h7>
        </div>
        <div className="app-how-it-works-arrow2"></div>
        <div className="arrow2"></div>
        <div className="app-how-it-works-subtext3">
          <h7 className="how-it-works-text">Start Shopping!</h7>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
