import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class UsersList extends Component {

  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  testApi() {
    fetch('http://localhost:8000/users')
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
    this.testApi();
  }
  
  render() {
    return (
      <div>
        <p>Listing users</p>
      </div>
    )
  }
}

export default UsersList
