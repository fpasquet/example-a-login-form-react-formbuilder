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
  render() {
    const { LoginForm } = this.state;

    return (
      <div className="screen-login">
        {LoginForm ? (
          <LoginForm.Formik
            className="screen-login__form"
            onSubmit={this.onSubmit}
          />
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    );
  }
}

export default LoginScreen;
