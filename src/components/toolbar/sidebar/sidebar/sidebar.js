import React from 'react';
import './sidebar.css'
import { connect } from 'react-redux';
import ActiveToolbarItem from '../activeToolbarItem/activeToolbarItem';

const Sidebar = props => {
  let res = null;
  if(props.activeItemProps){
    res = props.activeItemProps.map(item => {
      const iProps = {
        header: item.header,
        items: item.items
      }
      return <ActiveToolbarItem {...iProps}/>
    })
  }
  return(
    <div className = "sidebar">
      {res}
    </div>
  );
}

const mapStateToProps = state => ({
  activeItemProps: state.toolbar.activeItemProps
})

export default connect(mapStateToProps)(Sidebar);
