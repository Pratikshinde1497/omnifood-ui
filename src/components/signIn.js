import React, { Component } from 'react'
import axios from "axios";
import PostList from './list-posts';
import { Redirect } from "react-router";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      user: null,
      
      email: '',
      password: '',
      success: false,
      done: false
    } 
  }

  componentDidUpdate() {
    this.render()
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post("http://localhost:8000/users/getUserId/", {user})
    // .then(res=> res.json())
    .then(res=> {
      console.log(res);
      this.setState({
        user: res.data.message,
        success: res.data.success
    })
    this.setState({
      done: true
    })
  })
    .catch(err=> this.setState({
      success: err
    }))

    if(this.state.success) {
      this.setState({
          email: '',
          password: '',
        })
      // window.location='/'
    }
    // console.log(this.state.user);

    
    // window.location='/'
  }

  render() {

    const form = (
      <div className="container">
      <h3>Lets! Discover.Learn.Teach.Post</h3>
      <form onSubmit={this.onSubmit} className="formContainer">
        <input className="inputField" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.setEmail}/>
        <input className="inputField" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.setPassword}/>
        {
        (this.state.success)
        ?       <PostList user={this.state.user}/>  
        : <p className="errField">{this.state.user}</p> 
      }
        <button className="btn continue" type="Submit">Continue</button>
      </form>
    </div>
    )

    return (
      <div>
        {
          this.state.done
            ? <Redirect to="/" /> 
            : form
        }
      </div>
    )
  }
}

export default SignIn;
