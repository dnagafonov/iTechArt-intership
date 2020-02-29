const action_constants = require('../actions/action-constants');


const loginReducer = (state, action) => {
  switch (action.type) {
    case action_constants.LOG_IN:
      return { ...state.users, isAuthorizated: true };

    case action_constants.LOG_OUT:
      return { ...state.users, isAuthorizated: false };

    default:
      return state;
  }
}

export default loginReducer;