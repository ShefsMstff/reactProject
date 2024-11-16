import React from 'react'
import './_Navbar.scss'
const Navbar = () => {
  return (
     <nav className='navbar'>
            <div className="navbar-heading">
                <h2>React Ecommerce</h2>
                </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-buttons">
                <button>Login</button>
                <button>Register</button>
                <button>Card</button>
            </div>
        </nav>
  )
}
export default Navbar