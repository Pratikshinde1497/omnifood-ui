import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditPost extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      title,
      message,
    }
    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.post.id,
      payload: data
    })
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
    defaultValue = {this.props.post.message}/>
    <br /><br />
    <button className="btn">Post</button>
  </form>
</div>
);
}
}

export default connect()(EditPost);
