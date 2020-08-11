import React, { Component } from 'react'
import axios from "axios";

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      user: [],
      email: '',
      password: '',
      err: ''
    } 
  }

  componentDidMount() {
    
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
    axios.post("http://localhost:8000/isUser/", user)
    .then(res=> res.json())
    .then(res=> this.setState({
      user: res
    }))
    .catch(err=> this.setState({
      err: err
    }))

    // this.setState({
    //   email: '',
    //   password: '',
    //   err: ''
    // })
    
    // window.location='/'
  }

  render() {
    return (
      <div className="container">
        <h3>Lets! Discover.Learn.Teach.Post</h3>
        <form onSubmit={this.onSubmit} className="formContainer">
          <input className="inputField" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.setEmail}/>
          <input className="inputField" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.setPassword}/>
          {
            (this.state.err)
          ? <p className="errField">{this.state.err}</p>
          : <p className="errField">err</p>
        }
          <button className="btn continue" type="Submit">Continue</button>
        </form>
      </div>
    )
  }
}

export default AddUser;
