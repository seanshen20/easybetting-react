import React from "react";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1"><img className={styles.img} src="/EasyBet.PNG" alt=""/></span>
      </nav>
      <div className="navbar-nav">
        <span className="nav-item nav-link">
          Racing
        </span>
      </div>
      <div className="navbar-nav">
        <span className="nav-item nav-link">
          Sports
        </span>
      </div>
      <div className="navbar-nav">
        <span className="nav-item nav-link">
          Live Betting
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
