import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './reducers/login-reducer'

const initailState = {
  users:[],
  isAuthorizated: false
}

const store = createStore(loginReducer, initailState);

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
