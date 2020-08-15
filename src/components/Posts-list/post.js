import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./style.css"

class Post extends Component {
render() {
    return (
      <div >
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
        
        <button className="btn" onClick={() => this.props.dispatch({
          type: "EDIT_POST",
          id: this.props.post.id,
        })}>Edit</button>

        <button className="btn"  onClick={() => this.props.dispatch({
          type: "DEL_POST",
          id: this.props.post.id
        })}>Delete</button>
      </div>
    )
  }
}


export default connect()(Post)
