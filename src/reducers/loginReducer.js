const { FETCH_LOGIN_USER_REQUEST, FETCH_LOGIN_USER_SUCCESS, FETCH_LOGIN_USER_FAILURE } = require("../actions/sign-in")

const initialState = {
  loading: true,
  data: null,
  error: null
}

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_LOGIN_USER_SUCCESS: 
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_LOGIN_USER_FAILURE: 
      return {
        loading: false,
        data: null,
        error: action.payload
      }
    default:
      return state
  }
}

export default loginReducer;