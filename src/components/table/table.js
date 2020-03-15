import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Table extends React.Component {
  state = {
    posts: []
  }

  componentDidMount(){
    const posts = axios.get("https://jsonplaceholder.typicode.com/posts").
    then(res => console.log(res)).
    catch(err => console.error(err.message))
    this.setState({
      posts
    });
  }

  render(){
    const columns = [
      {
        Header: "user_id",
        accessor: "userId"
      },
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "title",
        accessor: "title"
      },
      {
        Header: "content",
        accessor: "body"
      },
    ]
    return(
      <ReactTable
        columns={columns}
        defaultPageSize={5}

      />
    );
  }
}

export default Table;