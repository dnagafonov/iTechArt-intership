import React from 'react';
import './toolbar-item.css'
import '../../../css/block-outline.css'
import { toggleActiveToolbarEl } from '../../../actions/actions';
import { connect } from 'react-redux';

const ToolbarItem = props => {
    const { toolName, changeActive, alt, src, id, isActive } = props;
    const active = isActive ? "block-outline" : "";
    return(
      <div className = {`toolbar-item block-outline-hover ${active}`} onClick = {() => changeActive(id)}>
        <img src={src} alt={alt}/>
        <p>{toolName}</p>
      </div>
    );
}

const mapDispatchToProps = dispath => ({
  changeActive(id){
    dispath(toggleActiveToolbarEl(id))
  }
})

export default connect(null, mapDispatchToProps)(ToolbarItem);
