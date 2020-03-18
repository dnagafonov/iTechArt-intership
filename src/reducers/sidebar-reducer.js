const {type} = require('../actions/action-constants');

const i = {
  json: null
};

const sidebar = (state = i, action) => {
  switch (action.type) {

    case type.GET_TABLE_DATA:
      return {
        json: action.json
      }
    default:
      return state;
  }
}

export default sidebar;