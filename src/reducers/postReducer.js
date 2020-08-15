import { FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE } from "../actions/posts";

const initialState = {
  loading: true,
  data: [],
  error: null
}


const postReducer = (state= initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case 'ADD_POST':
      console.log(state.data.concat([action.payload]));
      return {
        ...state,
        data: state.data.concat([action.payload])
      };
    case 'DEL_POST':
      return {...state, data: state.data.filter(post=> post._id !== action.id)}
    case 'EDIT_POST':
      return { ...state, data: state.data.map(post=> post._id === action.id ? {...post, editing: !post.editing }: post)}
    case 'UPDATE':
      return {
        ...state, 
        data: state.data.map((post) => {
        if (post._id === action.id) {
        return {
          ...post,
          title: action.payload.title,
          message: action.payload.content,
          editing: !post.editing
          }
        } else return post;
      })}
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
        error: action.error
      }
    default:
      return state;
  }
}

export default postReducer;