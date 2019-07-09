import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authenticate,authAutoSignIn } from '../../actions/auth';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback } from 'reactstrap';


class Login extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.onAutoSignIn();
  }

  handleSubmit(values){
    let user = {
      email: values.email,
      password: values.password,
    }
    this.props.onTryAuth(user);
  }

  render(){
    const customInputForm = ({field, form: {touched, errors}, ...props}) => (
      <div>
        <Input
          invalid={!!(touched[field.name] && errors[field.name])}
          {...field}
          {...props} />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
      </div>
    );

    const loginSchema = Yup.object().shape({
      password: Yup.string()
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required")
    });
    return (
      <React.Fragment>
        <Container>
          <h2>Login</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
            validationSchema={loginSchema}
            render={props => (
              <Form onSubmit={props.handleSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Field name="email" type={'email'} component={customInputForm}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Field name="password" type={'password'} component={customInputForm}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          />
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
    onTryAuth: (authData) => dispatch(authenticate(authData)),
    onAutoSignIn: () => dispatch(authAutoSignIn())
  };
};

export default connect(structuredSelector, mapDispatchToProps)(Login);
