import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import './login-form.css'
import axios from '../../axios';
import { login } from '../../actions/actions'

class LoginForm extends React.Component {

  state = {
    login: "",
    password: "",
    isAuthorizated: this.props.isAuthorizated,
    isLoginAlert: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    if(this.state.login !== "" && this.state.password !== ""){
      axios.post('/api/users/login',{
        login: `${this.state.login}`,
        password: `${this.state.password}`
      })
      .then(res => {
        console.log(res);
        if(res.data === "success"){
          this.setState({
            isAuthorizated: true
          })
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
    const loginAlert = this.state.isLoginAlert ? "" : "hide";
    let loginForm = null;
    console.log(this.state)
    if(!this.state.isAuthorizated){
      loginForm = (
        <div className = "login-wrapper">
        <Form className="form">
          <Alert variant = "danger" className = {loginAlert}>Incorrect login or password.</Alert>
          <Form.Group controlId = "login">
            <Form.Control type = "text" placeholder = "login" onChange = { this.loginChange } value={ this.state.login }/>
            <Form.Text className="muted">Please enter your login.</Form.Text>
          </Form.Group>
          <Form.Group controlId = "password">
            <Form.Control type = "password" placeholder = "password" onChange = { this.passwordChange } value={ this.state.password }/>
            <Form.Text>Newer tell someone your password.</Form.Text>
          </Form.Group>
          <Button size = "sm" onClick={ this.handleSubmit } >login</Button>
        </Form>
      </div>
      );
    }
    return (
      <>
        {loginForm}
      </>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(account){
    dispatch(login(account))
  }
});

const mapStateToProps = (state) => ({
  isAuthorizated: state.isAuthorizated
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);