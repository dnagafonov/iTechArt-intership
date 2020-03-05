import React from 'react';
import { connect } from 'react-redux';
import ToolbarItem from '../toolbar-item/toolbar-item'
import './toolbar.css'

class Toolbar extends React.Component {
  state = {
    toolbarItems: []
  };

  componentDidMount(){
    this.setState(state => ({
      toolbarItems: this.props.store
    }))
  }
  render(){
    const items = this.state.toolbarItems.map(el => <ToolbarItem src = {el.src}
                                                                    toolName = {el.toolName}
                                                                    alt = {el.alt}
                                                                    isActive = {el.isActive}
                                                                    id = {el.id}
                                                                    />)
    return(
      <nav className="toolbar">
        {items}
      </nav>
    );
  };
}

const mapStateToProps = store => ({store: store.toolbarItems})

export default connect(mapStateToProps)(Toolbar);