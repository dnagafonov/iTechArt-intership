import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { connect } from 'react-redux';
import { generateTableHeader } from '../../tools/generate-table-header';

const Table= props => {
  const columns = props.tableJSON ? generateTableHeader(props.tableJSON) : [];
  return(
    <ReactTable
      columns={columns}
      defaultPageSize={5}

    />
  );
}

const mapStateToProps = state => ({
  tableJSON: state.sidebar.json
})

export default connect(mapStateToProps)(Table);