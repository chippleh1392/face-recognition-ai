import React from "react";
import "../Signin/Signin.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://facial-recognition-back.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          console.log("something went wrong");
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
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-26">New User?</span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="name"
                  onChange={this.onNameChange}
                  onKeyPress={this.handleKeyPress}
                />
                <span className="focus-input100" data-placeholder="Name"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={this.onEmailChange}
                  onKeyPress={this.handleKeyPress}
                />
                <span
                  className="focus-input100"
                  data-placeholder="Email"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  onChange={this.onPasswordChange}
                  onKeyPress={this.handleKeyPress}
                />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button
                    className="login100-form-btn"
                    onClick={this.onSubmitSignIn}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">Already have an account? </span>

                <a
                  className="txt2"
                  href="#"
                  onClick={() => onRouteChange("signin")}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
