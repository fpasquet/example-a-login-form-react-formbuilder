import React, { Component } from "react";

import LoginFormBuilder from "../formBuilder/login";

class LoginScreen extends Component {

  state = {
    LoginForm: null
  };

  componentWillMount() {
    const LoginForm = LoginFormBuilder();
    this.setState({ LoginForm });
  }

  onSubmit = (payload, formikProps) => {
    console.log(payload);
  };

  formikRender = (formikProps) => {
    const { LoginForm } = this.state;
    const { Fields } = LoginForm;

    console.log(Fields);

    return (
      <LoginForm.Form {...formikProps}>

        <Fields.Email.Row />
        {/* or */}
        {/* LoginForm.Row('email') */}

        <div className="form__row">
          <Fields.Password.Label />
          <Fields.Password.Field />
          <Fields.Password.Errors />
        </div>
        {/* or */}
        {/* {LoginForm.Label('password')}
        {LoginForm.Field('password')}
        {LoginForm.Errors('password')} */}

        <Fields.Submit.Row />
      </LoginForm.Form>
    );
  };

  render() {
    const { LoginForm } = this.state;

    return (
      <div className="screen-login">

        {LoginForm ? (
          <LoginForm.Formik
            className="screen-login__form"
            onSubmit={this.onSubmit}
            render={this.formikRender}
          />
        ) : (
            <p>Loading ...</p>
          )}
      </div>
    );
  }
}

export default LoginScreen;
