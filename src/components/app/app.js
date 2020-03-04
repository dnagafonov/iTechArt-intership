import React from 'react';
import LoginForm from '../login-form/login-form'
import { connect } from 'react-redux';

class App extends React.Component {

  state = this.props.state;

  render(){
    return (
      <>
        <LoginForm/>
      </>
    );
  };
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App);
