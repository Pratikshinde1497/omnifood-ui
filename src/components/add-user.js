import React, { Component } from 'react'
import axios from "axios";
// import PropTypes from 'prop-types'

export class CreateUser extends Component {
  
  constructor(props) {
    super(props);


    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name : '',
      email: '',
      password: ''
    } 


  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
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
    // console.log(this.state);
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    console.log({newUser: newUser});

    axios.post("http://localhost:8000/users/", {newUser})
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
    window.location='/'
  }

  render() {
    return (
      <div className="container">
        <h3>Hello, Lets get started.</h3>
        <form onSubmit={this.onSubmit} >
          <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.setName}/>
          <input type="email" placeholder="Enter Email" value={this.state.email} onChange={this.setEmail}/>
          <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.setPassword}/>

          <button type="Submit">Make yourself a Home!</button>
        </form>
      </div>
    )
  }
}

export default CreateUser;
