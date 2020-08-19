import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import store  from "./store";
import { Auth0Provider } from "@auth0/auth0-react";
import "./style.css"

ReactDOM.render(
  
    <Provider store={store}>
      <Auth0Provider 
        domain="dev-1i10ihxc.us.auth0.com"
        clientId="RpNVhVevHTzWdxytQnV0bTCAVQjgjBPd"
        redirectUri={window.location.origin}
        audience="https://dev-1i10ihxc.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <App />
    </Auth0Provider>
    </Provider>,
  document.getElementById('root')
);