import React from 'react';
import './_Navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiShoppingCart2Fill } from 'react-icons/ri';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <h2>React Ecommerce</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <button className="login">
          <FaArrowRightToBracket className="btnIcons" />
          <Link to="/login">Login</Link>
        </button>
        <button className="register">
          <BsFillPersonPlusFill className="btnIcons" />
          <Link to="/register">Register</Link>
        </button>
        <button className="card">
          <RiShoppingCart2Fill className="btnIcons" />
          <Link to="/card">
            Card <span className="counter">({cartCount})</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
