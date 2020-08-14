import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditPost from '../Edit-Post/editPost';
import "./style.css"
class AllPost extends Component {
  render() {
    return (
    <div className="posts-list-container">
      <h1>All Posts</h1>
      {
        this.props.posts.map(post =>  
        <div className="post-style" key={post.id}>
          {post.editing 
            ? <EditPost post={post} key={post.id} /> 
            : <Post post={post} key={post.id} />}
        </div>)
      }
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  posts: state
  }
}
export default connect(mapStateToProps)(AllPost);