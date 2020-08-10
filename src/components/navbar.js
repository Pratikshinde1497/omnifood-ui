import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">MyBlogPostApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Posts</Link>
            </li>
            <li>
              <Link to="/post" className="nav-link">Create Post</Link>
            </li>
            <li>
              <Link to="/user" className="nav-link">Add User</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
