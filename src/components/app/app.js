import React from 'react';
import LoginForm from '../login-form/login-form'
import { connect } from 'react-redux';
import Toolbar from '../toolbar/toolbar/toolbar';
import Sidebar from '../sidebar/sidebar/sidebar';

class App extends React.Component {
  render(){
    let login = <LoginForm/>;
    let toolbar = null;
    if(this.props.profile.isAuthorizated){
      login = null;
      toolbar = <Toolbar/>;
    }
    return (
      <>
        {login}
        {toolbar}
        <Sidebar />
      </>
    );
  };
}

const mapStateToProps = (store) => ({profile: store.profile});

export default connect(mapStateToProps)(App);
