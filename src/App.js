import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./components/create-post";
import { AddUser } from "./components/add-user";
import { MenuList } from "./components/menu-list";
import { UsersList } from "./components/list-user";



import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  testApi() {
    fetch('http://localhost:8000/')
      .then(res => res.text())
      .then(data => {
        this.setState({
        data: data
      })
      let d= this.state.data;
      console.log(d);
      
    }).catch(err => console.log(err))
  }

  componentWillMount() {
    // this.testApi();
  }

  render() {
    return (
      <div className="App constainer">
        
        <Router>
          <Navbar/>
            <div className="component">
              <Route path="/" exact component={MenuList} />
              <Route path="/create-post" component={CreatePost} />
              <Route path="/add-user" component={AddUser} />
              <Route path="/users" component={UsersList}/>  
            </div>
          </Router>
        
      </div>
    );
  }
}

export default App;
