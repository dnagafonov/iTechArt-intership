import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import './login-form.css'

class LoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-wrapper">
        <Form>
          <Form.Group controlId="login">
            <Form.Control type="text" placeholder="login"/>
            <Form.Text className="muted">Please enter your login.</Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="password"/>
            <Form.Text>Newer tell someone your password.</Form.Text>
          </Form.Group>
          <Button size="sm">login</Button>
        </Form>
      </div>
    );
  };
};

export default connect()(LoginForm);