import loginReducer from './login-reducer';
import itemsReducer from './items-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  loginReducer,
  itemsReducer
})