import React from 'react';
import './toolbar-item.css'
import { toggleActiveToolbarEl } from '../../../actions/actions';
import { connect } from 'react-redux';

const ToolbarItem = props => {
    const { toolName, changeActive, alt, src, id } = props;
    return(
      <div className = "toolbar-item" onClick = {() => changeActive(id)}>
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
