import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { connect } from 'react-redux';
import { generateTableHeader } from '../../tools/generate-table-header';

const Table = props => {
  let tableProps = {};
  if(props.tableJSON){
    tableProps["columns"] = generateTableHeader(props.tableJSON);
    tableProps["data"] = props.tableJSON;
  }
  else
    tableProps["columns"] = [];

  return(
    <ReactTable {...tableProps}/>
  );
}

const mapStateToProps = state => ({
  tableJSON: state.sidebar.json
})

export default connect(mapStateToProps)(Table);