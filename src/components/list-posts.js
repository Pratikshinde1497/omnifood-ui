import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  getPosts() {
    fetch('http://localhost:8000/blogs')
      .then(res => res.json())
      .then(data => {
      console.log(data.message);

        this.setState({
        posts: data.message,
        isLoading: false
      })
    }).catch(err => console.log(err))
  }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    let {isLoading, posts} = this.state;
    if(!isLoading)
      return <div >
        <h3>List of posts</h3>
        <ul>{posts.map(post=> 
          <li key= {post._id} className="list-item">
            <h4 className="post-title">{post.title}</h4>
            <span className="post-content">{post.content}</span>
          <small className="post-author">-- {post.author.name}</small>
          </li>
      )}</ul>
      </div>
    return <p>Loading...</p>
  }
}

export default PostList
