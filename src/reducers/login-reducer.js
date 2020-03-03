const {type} = require('../actions/action-constants');

const loginReducer = (state, action) => {
  switch (action.type) {
    case type.LOGIN:
      return { account: action.account, isAuthorizated: true };

    case type.LOGOUT:
      return { account: "", isAuthorizated: false };

    default:
      return state;
  }
}

export default loginReducer;