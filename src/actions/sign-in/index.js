import axios from "axios";

export const FETCH_LOGIN_USER_REQUEST = 'FETCH_LOGIN_USER_REQUEST'
export const FETCH_LOGIN_USER_SUCCESS = 'FETCH_LOGIN_USER_SUCCESS'
export const FETCH_LOGIN_USER_FAILURE = 'FETCH_LOGIN_USER_FAILURE'

export const fetchLoginUserRequest = () => {
  return {
    type: FETCH_LOGIN_USER_REQUEST
  }
}

export const fetchLoginUserSuccess = (user) => {
  return {
    type: FETCH_LOGIN_USER_SUCCESS,
    payload: user
  }
}

export const fetchLoginUserFailure = (error) => {
  return {
    type: FETCH_LOGIN_USER_FAILURE,
    payload: error
  }
}

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(fetchLoginUserRequest(credentials));
    console.log(credentials);
    axios.post('http://localhost:8000/users/getUserId', {user: credentials})
      .then(res=> res.data)
      .then(res => {
        if(res.message) {
          const userData = res.message
          dispatch(fetchLoginUserSuccess(userData))
        }
        else 
        dispatch(fetchLoginUserFailure(res.error))
      })
      .catch(err => {
        const error = err.message
        dispatch(fetchLoginUserFailure(error))
      })
  }
}