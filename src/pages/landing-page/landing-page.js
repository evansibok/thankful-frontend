import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import brandImage from '../../assets/thankful-logo.png';


function LandingPage() {

  const [isOpen, setIsOpen] = useState(true);

  const OnMenuClick = () => {
    setIsOpen(!isOpen);

    const navSelect = document.querySelector(".landing-nav");
    if (navSelect.style.display === "flex") {
      navSelect.style.display = "none";
    } else {
      navSelect.style.display = "flex";
    }
  }

  return (
    <div className="landing-page-con">
      <div className="nav-header">
        <div className="left-con">
          <Link to="/">
            <img src={brandImage} className="brand-logo" alt="brand-logo" />
          </Link>

          {isOpen ? <CloseIcon className="menu-icon" onClick={OnMenuClick} /> : <MenuIcon className="menu-icon" onClick={OnMenuClick} />}
        </div>

        <nav className="landing-nav">
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
      <main className="landing-main">
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