import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import brandImage from '../../assets/thankful-logo.png';
import "./landing-page.styles.scss";

function LandingPage() {

  return (
    <div className="landing-page-con">
      <header>
        <div className="brand-image">
          <Link to="/">
            <img src={brandImage} className="brand-logo" alt="brand-logo" />
          </Link>
        </div>

        <nav>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Create Account</NavLink>
        </nav>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  )
}

export default LandingPage;