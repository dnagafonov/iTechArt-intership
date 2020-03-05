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
  toolbarItems:[
    {
      id: 0,
      toolName: "Рабочий стол",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 1,
      toolName: "Справочники",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 2,
      toolName: "Закупки",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 3,
      toolName: "Склад",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 4,
      toolName: "Продажи",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 5,
      toolName: "Розничная торговля",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 6,
      toolName: "Финансы",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 7,
      toolName: "Цена",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 8,
      toolName: "Оборудование",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 9,
      toolName: "Транспорт",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 10,
      toolName: "ВЭД",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 11,
      toolName: "Производство",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 12,
      toolName: "WMS",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 13,
      toolName: "Чат",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 14,
      toolName: "Учетная запись",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 15,
      toolName: "Поиск",
      src: {},
      alt: "dashboard",
      isActive: false
    },
    {
      id: 16,
      toolName: "BI",
      src: {},
      alt: "dashboard",
      isActive: false
    },

  ],
  profile: {
    account: {
      login: "",
      password: ""
    },
    isAuthorizated: false
  }
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
