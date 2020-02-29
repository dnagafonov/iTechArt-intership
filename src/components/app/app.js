import React from 'react';
import './app.css';
import LoginForm from '../login-form/login-form'

class App extends React.Component {


  render(){
    return (
      <div className="app">
        <LoginForm />
      </div>
    );
  };
}

export default App;
