import React from 'react';
import './activeToolbarItem.css'
import headerImg from './open.png';
import itemImg from './form.png';

const ActiveToolbarItem = props => {
  console.log(headerImg);
  const { header, items } = props;
  const name = (
    <div className="active-toolbar-item__name">
      <img src={headerImg} alt={header}/>
      <div>{header}</div>
    </div>
  );
  const operations = items.map(operation => (
    <li className="active-toolbar-item__operation">
      <img src={itemImg} alt = {operation}/>
      <div>{operation}</div>
    </li>
  ));
  return(
    <div className = "active-toolbar-item">
      {name}
      <ul className="active-toolbar-item__operations">
        {operations}
      </ul>
    </div>
  );
}

export default ActiveToolbarItem;
