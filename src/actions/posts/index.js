import axios from "axios";

//  get: posts
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

//  post: post
export const PUSH_POST_REQUEST = 'PUSH_POST_REQUEST'
export const PUSH_POST_SUCCESS = 'PUSH_POST_SUCCESS'
export const PUSH_POST_FAILURE = 'PUSH_POST_FAILURE'

//  delete: post
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

//  update: post
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'

export const EDIT_POST = 'EDIT_POST'

const fetchPOSTSRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

const fetchPOSTSSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

const fetchPOSTSFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

const pushPostRequest = () => {
  return {
    type: PUSH_POST_REQUEST
  }
}

const pushPostSuccess = (res) => {
  return {
    type: PUSH_POST_SUCCESS,
    payload: res
  }
}

const pushPostFailure = (err) => {
  return {
    type: PUSH_POST_REQUEST,
    payload: err
  }
}

const editPost = (id) => {
  return {
    type: EDIT_POST,
    payload: id
  }
}

const updatePostRequest = (make_update_post) => {
  return {
    type: UPDATE_POST_REQUEST,
    payload: make_update_post
  }
}

const updatePostSuccess = (updatedPost) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: updatedPost
  }
}

const updatePostFailure = (err) => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: err
  }
}
//  delete: post by id
const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST
  }
}

const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: id
  }
}

const deletePostFailure = (err) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: err
  }
}

// fetch posts function
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPOSTSRequest);

    axios.get('http://localhost:8000/blogs/')
      .then(res => {
        const posts = res.data.message
        dispatch(fetchPOSTSSuccess(posts))
      })
      .catch(err => {
        const error = err.message
        dispatch(fetchPOSTSFailure(error))
      })
  }
}

// push post function
export const pushPost = (data) => {
  return (dispatch) => {
    dispatch(pushPostRequest);

    axios.push('http://localhost:8000/blogs/', {newBlog: data})
      .then(res => {
        const post = res.data.message
        dispatch(pushPostSuccess(post))
      })
      .catch(err => {
        const error = err.message
        dispatch(pushPostFailure(error))
      })
  }
}



//  delete post function
export const deletePost = (id) => {
  return (dispatch) => {
    dispatch(deletePostRequest)
    axios.delete(`http://localhost:8000/blogs/${id}`)
      .then(res=> res.data)
      .then(res=> {
        const id = res.message._id
        dispatch(deletePostSuccess(id))
      })
      .catch(err=> {
        dispatch(deletePostFailure(err.error))
      })
  }
}

//  put: post 

export const updatePost = (post) => {
  return (dispatch) => {

    dispatch(updatePostRequest)
    axios.put(`http://localhost:8000/blogs/${post._id}`,{newBlog: post})
      .then(res=>res.data)
      .then(_=> {
        dispatch(updatePostSuccess(post))
      })
      .catch(err=> {
        dispatch(updatePostFailure(err.error))
      })
  }
}

export const editPostFun = (id) => {
  return (dispatch) => {
    dispatch(editPost(id))
  }
}