import React, {Component} from 'react'
import "./style.css"

class User extends Component {
  render() {
      return (
        <div >
          <h2 className="h2-user">{this.props.user.name}</h2>
          <p className="user-para">{this.props.user.email}</p>
        </div>
      )
    }
  }

export default User