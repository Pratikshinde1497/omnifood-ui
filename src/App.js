import React, {Component} from 'react';
import PostForm from "./components/Create-Post/createpost";
import AllPost from './components/Posts-list/allPosts';
import {  BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navigations/navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Route path="/" exact component={AllPost} />
          <Route path="/create-post" exact component={PostForm} />
          
        </Router>
        {/* <PostForm/>
        <AllPost/> */}
      </div>
    );
  }
}


export default App;


