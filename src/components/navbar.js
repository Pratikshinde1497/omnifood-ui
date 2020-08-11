import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Omni-Food</Link>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Food Delivery</Link>
            </li>
            <li>
              <Link to="/create-post" className="nav-link">How It Works</Link>
            </li>
            <li>
              <Link to="/add-user" className="nav-link">Sign Up</Link>
            </li>
            <li>
              <Link to="/users" className="nav-link">Users List</Link>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Navbar;
