import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./style.css"
import { deletePost, editPostFun } from '../../actions/posts'

class Post extends Component {
render() {
    return (
      <div >
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
        <h5>Author: {this.props.post.author.name}</h5>
        <button className="btn" onClick={() => this.props.editPost(this.props.post._id)}>Edit</button>

        <button className="btn"  onClick={() => this.props.deletePost(this.props.post._id)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    editPost: (id) => dispatch(editPostFun(id))
  }
}

export default connect(null, mapDispatchToProps)(Post)
