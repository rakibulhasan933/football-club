import React from 'react';
import './Header.css';
import logo from '../../img/inter.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="https://fcb1.netlify.app/" className="navbar-brand">
            <img src={logo} alt="Logo" /> Inter Milan
          </a>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="home">
                  FIFA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="home">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="home">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
