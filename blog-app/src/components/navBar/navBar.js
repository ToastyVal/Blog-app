
import React from "react";
import { Link } from "react-router-dom";

import './NavBarStyles.css';


const NavBar = () => {

  return (
    <div id="navbar" className='header'>
      <Link to="/">
        <h1 className="header">Goat Ropers &#174;</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to='/register'>Registration</Link>
        </li>
        <li>

          <Link to="/chatApp">The Watering Hole</Link>

          <Link to='/admin'>Admin</Link>

        </li>
      </ul>
    </div>
  );
};

export default NavBar;

