import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actions/users"

const initialState = {
  loading: true,
  data: null,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: 
      return {
        ...state,
        loading: true 
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload
      }
    default: 
      return state
  }
}


export default userReducer