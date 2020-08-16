import React, {Component} from 'react';
import {  BrowserRouter as Router, Route } from "react-router-dom";

import AllPost from './components/Posts-list/allPosts';
import PostForm from "./components/Create-Post/createpost";
import Navbar from './components/Navigations/navbar';
import allUsers from './components/Users-list/allUsers';
import SignIn from './components/Sign-In';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Route path="/" exact component={AllPost} />
          <Route path="/create-post" exact component={PostForm} />
          <Route path="/users" component={allUsers} />
          <Route path="/sign-in" component={SignIn} />
        </Router>
      </div>
    );
  }
}


export default App;


