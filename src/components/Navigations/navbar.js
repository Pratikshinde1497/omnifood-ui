import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css"
import LogoutButton from '../sign-out';
import LoginButton from '../Sign-In/auth0Login';
import Profile from './profile';

export class Navbar extends Component {
  render() {
    return ( <div>
<nav className="navbar">
        <Link to="/"><img src="/android-icon-192x192.png" alt="logo not found"  className="navbar-brand"></img></Link>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Posts</Link>
            </li>
            <li>
              <Link to="/create-post" className="nav-link">New Post</Link>
            </li>
            <li>
            <Link to="/users" className="nav-link">Discover People</Link>
            </li>
            <li>
              <Link to="/sign-in" className="nav-link">Sign in</Link>
            </li>
            <li>
              <Link to="/auth0-login" className="nav-link" component = {LoginButton} >auth0-login</Link>
            </li>
            <li>
              <Link to="/auth0-log-out" className="nav-link" component={LogoutButton}>auth0-logout</Link>
            </li>
          </ul>
      </nav>
      <Profile/>
    </div>
    )
  }
}

export default connect() (Navbar);