import React from "react";
import { NavLink } from "react-router-dom";

const Splashpage = () => {
  return(
    <>
        <div class="app-block">
        <div class='app-block-slogan-wrapper'>
          <h2>Group shopping made easy</h2>
        </div>
        <nav>
          <ul className='learn-more'>
            <li><NavLink className='learn-more-style' to='/learn-more'>Learn More</NavLink></li>
          </ul>
        </nav>
        <div className="app-learn-more-button">
        </div>
      </div>

      <div class="app-bottom-block">
        <div className="app-how-it-works-text">
          <h6>Get Started</h6>
        </div>
        <div className="app-how-it-works-subtext1">
          <h7>Sign Up</h7>
        </div>
        <div className="app-how-it-works-arrow1">
        </div>
        <div className="arrow">
        </div>
        <div className="app-how-it-works-subtext2">
          <h7>Create a GroupCart</h7>
        </div>
        <div className="app-how-it-works-arrow2">
        </div>
        <div className="arrow2">
        </div>
        <div className="app-how-it-works-subtext3">
          <h8>Start Shopping!</h8>
        </div>
      </div>
  </>
  )
}

export default Splashpage