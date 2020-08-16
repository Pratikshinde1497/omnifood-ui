import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import "./style.css"
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  login: loginReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);