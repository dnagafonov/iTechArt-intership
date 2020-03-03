import {type} from './action-constants'

export const login = (account) => ({
  type: type.LOGIN,
  account
});