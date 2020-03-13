import profile from './login-reducer';
import toolbar from './toolbar-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  profile,
  toolbar
})