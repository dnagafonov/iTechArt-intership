const {type} = require('../actions/action-constants');

const initialState = {
  profile: {
    account: {
      login: "",
      password: ""
    },
    isAuthorizated: false
  }
}

const loginReducer = (state = initialState, action) => {
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