import React from 'react';
import { Form, Alert, Button } from 'react-bootstrap'
import './login.css'

const Login = props => {
  const { loginAlert, login, loginChange, password, passwordChange, handleSubmit } = props;
  const loginAlertActive = loginAlert ? "" : "hide";
  return(
        <Form className="form">
          <Alert variant = "danger" className = {loginAlertActive}>Incorrect login or password.</Alert>
          <Form.Group controlId = "login">
            <Form.Control type = "text" placeholder = "login" onChange = { loginChange } value={ login }/>
            <Form.Text className="muted">Please enter your login.</Form.Text>
          </Form.Group>
          <Form.Group controlId = "password">
            <Form.Control type = "password" placeholder = "password" onChange = { passwordChange } value={ password }/>
            <Form.Text>Please enter your password.</Form.Text>
          </Form.Group>
          <Button size = "sm" onClick={ handleSubmit } >login</Button>
        </Form>
  );
}

export default Login;