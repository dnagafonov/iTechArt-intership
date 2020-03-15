import React from 'react';
import { connect } from 'react-redux';
import './login-form.css'
import axios from '../../axios';
import { login } from '../../actions/actions'
import Login from '../login/login';

const checkValid = (login, password) => login !== "" && password !== "";

class LoginForm extends React.Component {

  state = {
    login: "",
    password: "",
    isLoginAlert: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(checkValid(this.state.login, this.state.password)){
      /*STUB*/
      this.props.login({
        login: this.state.login,
        password: this.state.password
      });
      /*STUB*/
      axios.post('/api/users/login',{
        login: `${this.state.login}`,
        password: `${this.state.password}`
      })
      .then(res => {
        if(res.data === "success" ){
          this.props.login({
            login: this.state.login,
            password: this.state.password
          });
        }
        else {
          this.setState({isLoginAlert: true})
        }
      })
      .catch(e => console.error(`Problem with axios: ${e.message}`))
    }
  }

  loginChange = (e) => {
    this.setState({login: e.target.value})
  }

  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    const props = {
      login: this.state.login,
      password: this.state.password,
      loginChange: this.loginChange,
      passwordChange: this.passwordChange,
      loginAlert: this.state.isLoginAlert,
      handleSubmit: this.handleSubmit
    }
    return (
      <div className = "login-wrapper">
        <Login {...props}/>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(account){
    dispatch(login(account))
  }
});

const mapStateToProps = (store) => ({
  profile: store.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);