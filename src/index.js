import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './reducers/login-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  account: {
    login: "",
    password: ""
  },
  isAuthorizated: false
};

const store = createStore(loginReducer, initialState, composeWithDevTools());

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
