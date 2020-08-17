import { FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, PUSH_POST_REQUEST, PUSH_POST_SUCCESS, PUSH_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, EDIT_POST, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE } from "../actions/posts";

const initialState = {
  loading: true,
  data: null,
  error: null
}


const postReducer = (state= initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case PUSH_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PUSH_POST_SUCCESS:
      return {
        loading: false,
        data: state.data.concat([action.payload]),
        error: null 
      };
    case PUSH_POST_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload
      }
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DELETE_POST_SUCCESS: 
      return {
        loading: false,
        data: state.data.filter(post => post._id !== action.payload),
        error: null
      }
      case DELETE_POST_FAILURE: 
      return {
        loading: false,
        data: null,
        error: action.payload
      }
    
    case EDIT_POST:
      return { 
        ...state, 
        data: state.data.map(post => 
          post._id === action.payload 
            ? {...post, editing: !post.editing }
            : post
            )}
    
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case UPDATE_POST_SUCCESS:
      return {
        ...state, 
        data: state.data.map((post) => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              title: action.payload.title,
              content: action.payload.content,
              editing: !post.editing
            }
          } 
          else 
            return post;
        })
      }
    
    case UPDATE_POST_FAILURE: 
      return {
        loading: true,
        data: null,
        error: action.payload
      }
    
    case FETCH_POSTS_REQUEST: 
      return {
        ...state,
        loading: true
      }
    
    case FETCH_POSTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    
    case FETCH_POSTS_FAILURE: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default:
      return state;
  }
}

export default postReducer;