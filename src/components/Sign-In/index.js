import React, { Component } from 'react'
import { Redirect } from "react-router";
import { connect } from 'react-redux';
import { loginUser } from '../../actions/sign-in';
import "./style.css"

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
    } 
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
    this.props.loginUser(user)
    this.setState({
      email: '',
      password: ''
    })

  }

  render() {
    const form = (
      <div className="container">
      <h3>Lets, Discover.Learn.Teach.Post!</h3>
      <form onSubmit={this.onSubmit} className="formContainer">
        <input className="inputField" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.setEmail}/>
        <input className="inputField" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.setPassword}/>
        {
        (this.props.user.error)
        ? <p className="errField">{this.props.user.error}</p> 
        : <p className="succField"> </p>
      }
        <button className="btn continue" type="Submit">Continue</button>
      </form>
    </div>
    )

    return (
      <div>
        {
          this.props.user.data
            ? <Redirect to="/" /> 
            : form
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);