
import React from "react";
import { Link } from "react-router-dom";

import './NavBarStyles.css';


const NavBar = (props) => {

  return (
    <div id="navbar" className='header'>
      <Link to="/">
        <h1 className="nav--header">{props.title}</h1>
      </Link>
      <ul className="nav--menu">
        <li className="test">
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
        </li>
        <li>
        <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

