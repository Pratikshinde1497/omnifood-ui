import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.setTitle = this.setTitle.bind(this);
    this.setContent = this.setContent.bind(this);
    this.setComments = this.setComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: '',
      content: '',
      author: '',
      comments: [],
    }
  }

  setTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  setContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  setComments(e) {
    this.setState({
      comments: [...e.target.value]
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let {title, content} = this.state;
    console.log(title, content);
    let newBlog = {
      title,
      content,
      author: '',
      
    }
    
    axios.post("http://localhost:8000/blogs/", newBlog)
    .then(res=> res.json())
    .then(res=> this.setState({
      user: res
    }))
    .catch(err=> this.setState({
      err: err
    }))
  }

  render() {
    return (
      <div> 
        <h3>Lets! Do It</h3>
        <form onSubmit={this.onSubmit} className="formContainer">
          <input className="inputField" type="text" placeholder="Title" value={this.state.title} onChange={this.setTitle}/>
          <textarea className="inputField" placeholder="Post Content" value={this.state.content} onChange={this.setContent}/>
          <button className="btn continue" type="Submit">Post It!</button>
        </form>
      </div>
    )
  }
}

export default CreatePost
