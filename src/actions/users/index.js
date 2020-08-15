import axios from "axios";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUSERSRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUSERSSuccess = (USERS) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: USERS
  }
}

export const fetchUSERSFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUSERS = () => {
  return (dispatch) => {
    dispatch(fetchUSERSRequest);

    axios.get('http://localhost:8000/users/')
      .then(res=> res.data)
      .then(res => {
        const USERS = res.message
        dispatch(fetchUSERSSuccess(USERS))
      })
      .catch(err => {
        const error = err.message
        dispatch(fetchUSERSFailure(error))
      })
  }
}