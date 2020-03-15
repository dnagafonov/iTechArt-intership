const {type} = require('../actions/action-constants');
const initialState = require('./initialState/toolbar');

const toolbar = (state = initialState, action) => {
  let active = null;
  switch (action.type) {

    case type.TOOGLE_TOOLBAR_ITEM:
      return {
        toolbarItems: state.toolbarItems.map(el => {
          if(el.id === action.id){
            active = el.id;
            el.isActive = true;
          }
          else {
            el.isActive = false;
          }
          return el;
        }),
        activeId: active,
        activeItemProps: state.toolbarItems[active].sidebarItems
      }

    default:
      return state;
  }
}

export default toolbar;