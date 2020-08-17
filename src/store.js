import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  login: loginReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;