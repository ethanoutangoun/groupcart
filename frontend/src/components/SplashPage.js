import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import NavbarWrapper from './NavbarWrapper';
import "../styles/splash-page.css";
import cart from "../images/store_9-min.jpg";
import signUp from "../images/create-cart.png";
import createCart from "../images/sign-up.png";
import startShopping from "../images/start-shopping.png";

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
        <img className="block-img" src={cart}></img>
        <div class="app-block-slogan-wrapper">
          <h2 className="main-title">Group Shopping Made <em>Easy</em>.</h2>
        </div>
        <div className="block-links">
          <NavLink className="block-btn" to="/sign-in">
            Check your carts
          </NavLink>
          <NavLink className="block-btn" to="/sign-up">
            Create an account
          </NavLink>
          <NavLink className="block-btn" to="/learn-more">
            Learn more
          </NavLink>
        </div>
      </div>

      <div class="app-bottom-block">
        <h2 className="bottom-header">Getting Started</h2>
        <div className="instructions">
          <div className="bottom-card">
            <h3 className="bottom-card-header">Sign Up</h3>
            <img className="card-img" src={signUp}></img>
          </div>

          <div className="bottom-card">
            <h3 className="bottom-card-header">Create a GroupCart</h3>
            <img className="card-img" src={createCart}></img>
          </div>

          <div className="bottom-card">
            <h3 className="bottom-card-header">Start Shopping</h3>
            <img className="card-img" src={startShopping}></img>
          </div>
        </div>
      </div>

      <footer>
        <hr className="footer-line" />
      </footer>
    </div>
  );
};

export default SplashPage;
