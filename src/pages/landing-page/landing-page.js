import React from 'react';
import { NavLink } from 'react-router-dom';

import "./landing-page.styles.scss";

function LandingPage() {

  return (
    <div className="landing-page-con">
      <header className="">
        <div>
          <img className="brand-logo" alt="brand-logo" />
        </div>

        <nav>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/sign-up">Create Account</NavLink>
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