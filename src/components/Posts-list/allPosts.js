import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditPost from '../Edit-Post/editPost';
import "./style.css"
import { fetchPosts } from '../../actions/posts';
class AllPost extends Component {
  
  constructor (props) {
    super(props)
    props.fetchPosts()
  }

  render() {
    return (
    <div className="posts-list-container">
      <h1>All Posts</h1>
      {
        this.props.posts 
          ? this.props.posts.map(post =>  
            <div className="post-style" key={post.id}>
              {post.editing 
                ? <EditPost post={post} key={post.id} /> 
                : <Post post={post} key={post.id} />}
            </div>)
          : <p>Loading</p>
      }
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPost);
