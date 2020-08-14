
import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.css"

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      payload: data
    })
    this.getTitle.value = ''
    this.getMessage.value = ''
  }
render() {
return (
<div className="createPostContainer">
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit} className="createPostForm">
    <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title" />
    <br /><br />
    <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
    placeholder="Enter Post" />
    <br /><br />
    <button className="btn">Post</button>
  </form>
</div>
);
}
}

export default connect()(PostForm);