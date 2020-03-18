import React from 'react';
import './activeToolbarItem.css'
import '../../../css/block-outline.css'
import headerImg from './open.png';
import itemImg from './form.png';
import { connect } from 'react-redux';
import { getTableData } from '../../../actions/actions';

const ActiveToolbarItem = props => {
  const { header, items } = props;
  const name = (
    <div className="active-toolbar-item__name">
      <img src={headerImg} alt={header}/>
      <div>{header}</div>
    </div>
  );
  const operations = items.map(operation => (
    <li className="active-toolbar-item__operation block-outline-hover" key={operation.id} onClick={() => props.getTableJSON(operation.id)}>
      <img src={itemImg} alt = {operation}/>
      <div>{operation.name}</div>
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

const mapDispatch = dispatch => ({
  getTableJSON: (id) => {
    dispatch(getTableData(id));
  }
})

export default connect(null, mapDispatch)(ActiveToolbarItem);
