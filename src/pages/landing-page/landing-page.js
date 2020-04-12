import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import brandImage from '../../assets/thankful-logo.png';
import "./landing-page.styles.scss";

function LandingPage() {

  return (
    <div className="landing-page-con">
      <div className="nav-header">
        <div className="brand-image">
          <Link to="/">
            <img src={brandImage} className="brand-logo" alt="brand-logo" />
          </Link>
        </div>

        <nav>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Create Account</NavLink>
        </nav>
      </div>
      <main>
        <h1>Body Content</h1>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default LandingPage;