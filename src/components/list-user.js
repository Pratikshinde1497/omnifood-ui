import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class UsersList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      users: [],
      isLoading: true
    }
  }

  testApi() {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
        data: data,
        users: data.message,
        isLoading: false
      })
      console.log(this.state.users);
    }).catch(err => console.log(err))
  }

  componentWillMount() {
    this.testApi();
  }
  
  render() {
    let {isLoading, users} = this.state;
    if(!isLoading)
      return <div>
        <h3>List of Users</h3>
        <ul>{users.map(user=> 
        <li key= {user._id}>
          <p>{user.name}  |  {user.email}</p>
        </li>
      )}</ul>
      </div>
    return <p>Loading...</p>
  }
}

export default UsersList
