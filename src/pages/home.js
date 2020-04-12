import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {

  return (<div>
    <h2>This is the landing page</h2>
    <header>
      <div>
        <image className="brand-logo" alt="brand-logo" />
      </div>

      <nav>
        <NavLink>Log In</NavLink>
        <NavLink>Create Account</NavLink>
      </nav>
    </header>
    <main>

    </main>
    <footer>

    </footer>
  </div>)
}

export default LandingPage;