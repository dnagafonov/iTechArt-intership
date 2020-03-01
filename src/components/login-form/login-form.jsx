import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import './login-form.css'

class LoginForm extends React.Component {

  state = {
    login: "",
    password: "",
    success: false,
    spinnerActive: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.login !== "" && this.state.password !== ""){
      console.log(this.state);
      this.setState({
        login: "",
        password: ""
      });
    }
  }

  loginChange = (e) => {
    this.setState({login: e.target.value})
  }

  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    const s = this.state.success ? "non-visible" : "";
    return (
      <div className = "login-wrapper">
        <Form action = "127.0.0.1:8000/users" method = "post">
          <Alert variant = "danger" className = {s}>Incorrect login or password.</Alert>
          <Form.Group controlId = "login">
            <Form.Control type = "text" placeholder = "login" onChange = { this.loginChange } value={this.state.login}/>
            <Form.Text className="muted">Please enter your login.</Form.Text>
          </Form.Group>
          <Form.Group controlId = "password">
            <Form.Control type = "password" placeholder = "password" onChange = { this.passwordChange } value={this.state.password}/>
            <Form.Text>Newer tell someone your password.</Form.Text>
          </Form.Group>
          <Button size = "sm" onClick={this.handleSubmit} >login</Button>
        </Form>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);