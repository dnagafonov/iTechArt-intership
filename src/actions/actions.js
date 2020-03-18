import {type} from './action-constants';
import { requestTable } from '../tools/request-table';

export const login = (account) => ({
  type: type.LOGIN,
  account
});

export const toggleActiveToolbarEl = id => ({
  type: type.TOOGLE_TOOLBAR_ITEM,
  id
});

export const getTableData =  id => async dispatch => {
  const json = await requestTable(id);
  console.log(json);
  dispatch({
    type: type.GET_TABLE_DATA,
    json
  })
};