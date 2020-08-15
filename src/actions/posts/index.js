import axios from "axios";

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPOSTSRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

export const fetchPOSTSSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPOSTSFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

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