import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <h4>{this.props.post.message}</h4>
        
        <button onClick={() => this.props.dispatch({
          type: "EDIT_POST",
          id: this.props.post.id,
        })}>edit</button>

        <button onClick={() => this.props.dispatch({
          type: "DEL_POST",
          id: this.props.post.id
        })}>delete</button>
      </div>
    )
  }
}

export default connect()(Post)
