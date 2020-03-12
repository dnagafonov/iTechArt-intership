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
      axios.post('/api/users/login',{
        login: `${this.state.login}`,
        password: `${this.state.password}`
      })
      .then(res => {
        console.log(res);
        if(res.data === "success"){
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

    return (
      <div className = "login-wrapper">
        <Login/>
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
  profile: store.loginReducer.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);