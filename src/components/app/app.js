import React from 'react';
import LoginForm from '../login-form/login-form'
import { connect } from 'react-redux';
import Toolbar from '../toolbar/toolbar/toolbar';
import Sidebar from '../sidebar/sidebar/sidebar';
import Table from '../table/table';
import './app.css';

class App extends React.Component {
  render(){
    let login = <LoginForm/>;
    let app = null;
    if(this.props.profile.isAuthorizated){
      login = null;
      app = (
      <div className="app">
        <Toolbar/>
        <article>
          <Sidebar/>
          <Table/>
        </article>
      </div>);
    }
    return (
      <>
        {login}
        {app}
      </>
    );
  };
}

const mapStateToProps = (store) => ({profile: store.profile});

export default connect(mapStateToProps)(App);
