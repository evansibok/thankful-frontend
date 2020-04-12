import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import brandImage from '../../assets/thankful-logo.png';


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
          <Link to="/login">
            <Button variant="outlined" color="primary">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="primary">
              Create Account
            </Button>
          </Link>
        </nav>
      </div>
      <main>
        <h1>Body Content</h1>
        <h1>Body Content</h1>
        <h1>Body Content</h1>
        <h1>Body Content</h1>
      </main>
      <footer>

      </footer>
    </div >
  )
}

export default LandingPage;