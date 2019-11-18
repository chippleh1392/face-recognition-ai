import React from "react";
import "./Signin.css";
import "../../util.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      isInvalidLogin: false
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://facial-recognition-back.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          this.setState({ isInvalidLogin: true });
        }
      });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmitSignIn();
    }
  };

  render() {
    const { onRouteChange } = this.props;
    const isInvalidLogin = this.state.isInvalidLogin;

    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-70">Welcome</span>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={this.onEmailChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Email"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  onChange={this.onPasswordChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Password"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button
                    className="login100-form-btn"
                    onClick={this.onSubmitSignIn}
                  >
                    Login
                  </button>
                </div>
              </div>

              <div>
                {isInvalidLogin ? (
                  <div className="wrong-password">Invalid Login</div>
                ) : null}
              </div>

              <div className="text-center p-t-100">
                <span className="txt1">Forgot your password? </span>

                <a className="txt2" href="#">
                  Reset Password
                </a>
              </div>
              <div className="text-center">
                <span className="txt1">Don’t have an account? </span>

                <a
                  className="txt2"
                  href="#"
                  onClick={() => onRouteChange("register")}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
