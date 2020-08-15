import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./style.css"

class Post extends Component {
render() {
    return (
      <div >
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
        
        <button className="btn" onClick={() => this.props.dispatch({
          type: "EDIT_POST",
          id: this.props.post._id,
        })}>Edit</button>

        <button className="btn"  onClick={() => this.props.dispatch({
          type: "DEL_POST",
          id: this.props.post._id
        })}>Delete</button>
      </div>
    )
  }
}


export default connect()(Post)
