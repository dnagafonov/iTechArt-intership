import React from 'react';
import './toolbar-item.css'
import s from './images/bi.png'

class Toolbar__item extends React.Component {



  render(){
    const { toolName, toolbarItemClicked} = this.props;
    return(
      <div className = "toolbar-item" onClick = {() => toolbarItemClicked(this.props.id)}>
        <img src={s} alt={this.props.alt}/>
        <p>{toolName}</p>
      </div>
    );
  }
}

export default Toolbar__item;