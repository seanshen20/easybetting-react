import React from "react";
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1"><img className={styles.img} src="/EasyBet.PNG" alt=""/></span>
      </nav>
      <div className="navbar-nav">
        <NavLink to="/" className="nav-item nav-link">
          Racing
        </NavLink>
      </div>
      <div className="navbar-nav">
        <NavLink to="/sports" className="nav-item nav-link">
          Sports
        </NavLink>
      </div>
      <div className="navbar-nav">
        <NavLink to="/liveBetting" className="nav-item nav-link">
          Live Betting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
