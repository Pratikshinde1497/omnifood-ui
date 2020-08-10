import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./components/create-post";
import { CreateUser } from "./components/create-user";
import { PostList } from "./components/post-list";


import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: "In app"
    }
  }

  testApi() {
    fetch('http://localhost:8000/food-items')
      .then(res => res.text())
      .then(data => {
        this.setState({
        data
      })
      // .catch(err => console.log(err))
    })
  }

  componentWillMount() {
    // this.testApi();
  }

  render() {
    return (
      <div className="App constainer">
        
        <Router>
          <Navbar/>
          <br/>
          <Route path="/" exact component={PostList} />
          <Route path="/post" component={CreatePost} />
          <Route path="/user" component={CreateUser} />
        </Router>
      </div>
    );
  }
}

export default App;
