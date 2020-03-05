import React from 'react';
import LoginForm from '../login-form/login-form'
import { connect } from 'react-redux';
import Toolbar from '../toolbar/toolbar/toolbar';

class App extends React.Component {

  state = {
    store: {}
  };

  componentDidMount(){
    this.setState(state => ({
      isAuthorizated: this.props.store.profile.isAuthorizated
    }))
  }

  render(){
    let login = <LoginForm/>;
    if(!this.state.isAuthorizated)
      login = null;
    return (
      <>
        {login}
        <Toolbar/>
      </>
    );
  };
}

const mapStateToProps = (store) => ({store});

export default connect(mapStateToProps)(App);
