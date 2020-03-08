import React from 'react';
import { connect } from 'react-redux';
import ToolbarItem from '../toolbar-item/toolbar-item'
import './toolbar.css'

const Toolbar = props => {
    const items = props.toolbarItems.map(el => <ToolbarItem src = {el.src}
                                                                    toolName = {el.toolName}
                                                                    alt = {el.alt}
                                                                    isActive = {el.isActive}
                                                                    id = {el.id}
                                                                    key={el.id}
                                                                    />)
    return(
      <nav className="toolbar">
        {items}
      </nav>
    );
}

const mapStateToProps = store => ({toolbarItems: store.itemsReducer.toolbarItems})

export default connect(mapStateToProps)(Toolbar);