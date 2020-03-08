import {type} from './action-constants'

export const login = (account) => ({
  type: type.LOGIN,
  account
});

export const toggleActiveToolbarEl = id => ({
  type: type.TOOGLE_TOOLBAR_ITEM,
  id
});