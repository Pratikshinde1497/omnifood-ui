import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost } from '../../actions/posts';

class EditPost extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      ...this.props.post,
      title,
      content: message,
      author: this.props.post.author._id
    }
    this.props.updatePost(data)
    this.getTitle.value = ''
    this.getMessage.value = ''
  }
render() {
return (
<div>
  <h2>Edit Post</h2>
  <form onSubmit={this.handleSubmit}>
    <input required type="text" ref={(input)=>this.getTitle = input} 
    defaultValue ={this.props.post.title}/>
    <br /><br />
    <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
    defaultValue = {this.props.post.content}/>
    <br /><br />
    <button className="btn">Update Post</button>
  </form>
</div>
);
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (data) => dispatch(updatePost(data))
  }
}

export default connect(null, mapDispatchToProps)(EditPost);
