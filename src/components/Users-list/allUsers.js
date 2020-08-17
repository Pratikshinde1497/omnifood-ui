import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './user';
import "./style.css"
import { fetchUSERS } from '../../actions/users';
class AllUsers extends Component {
  
  constructor (props) {
    super(props)
    props.fetchUSERS()
  }

  render() {
    return (
    <div className="users-list-container">
      <h1>All Users</h1>
      {
        this.props.Users.error
          ? (<p  className="errField">{this.props.Users.error}</p>)
          : (this.props.Users.data)
              ? (this.props.Users.data.map(user =>  
            <div className="user-style" key={user._id}>
                <User user={user} key={user._id} />
            </div>))
              : <p>loading</p>
          // : <p>Loading</p>
      }
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Users: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUSERS: () => dispatch(fetchUSERS())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
