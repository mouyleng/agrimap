import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authenticate } from '../../actions/auth';
import configureStore from '../../configureStore';

const store = configureStore();
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
  constructor(){
    super();
  }

  handleSubmit(){
    let user = {
      email: this.email.value,
      password: this.password.value,
    }
    this.props.onTryAuth(user);
  }

  render(){
    return (
      <React.Fragment>
        <Container>
          <h2>Login</h2>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" innerRef={(ref) => {this.email=ref}} placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" innerRef={(ref) => {this.password=ref}} placeholder="Password" />
            </FormGroup>
            <Button onClick={()=> this.handleSubmit()}>Submit</Button>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

const structuredSelector = createStructuredSelector({
  auth: state => state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    onTryAuth: (authData) => dispatch(authenticate(authData))
  };
};

export default connect(structuredSelector, mapDispatchToProps)(Login);
