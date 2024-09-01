import React from 'react';
import "./Login.css";

import { connect } from 'react-redux';

import { updateLoginInfo, saveMode } from '../../redux/actions';
import { LoginModes } from '../../common/Constants';

class Login extends React.Component {

  checkLogin() {
    let { mode, loginInfo} = this.props;
    console.log("email:", loginInfo.email);
    console.log("password:", loginInfo.password);
    mode = LoginModes.MODE_SIGN_IN;
    this.props.saveMode(mode);
    this.props.updateLoginInfo(loginInfo);

  }

  checkSignInClick() {
    let { loginInfo, mode } = this.props;
    mode = LoginModes.MODE_SIGN_IN;
    this.props.saveMode(mode);
    this.props.updateLoginInfo(loginInfo);
  }

  handleSignUpModeClick() {
    let { mode, loginInfo } = this.props;
    loginInfo.fullName = "";
    loginInfo.email = "";
    loginInfo.password = "";
    this.props.updateLoginInfo(loginInfo);
    mode = LoginModes.MODE_SIGN_UP;
    this.props.saveMode(mode);
  }

  handleSignInModeClick() {
    let { mode, loginInfo } = this.props;
    loginInfo.email = "";
    loginInfo.password = "";
    this.props.updateLoginInfo(loginInfo);
    mode = LoginModes.MODE_SIGN_IN;
    this.props.saveMode(mode);
  }

  handleEmailBlur(e) {
    let { loginInfo } = this.props;
    let email = e.target.value;
    console.log(email);
    loginInfo.email = email;
    this.props.updateLoginInfo(loginInfo);
  }

  handlePasswordBlur(e) {
    let { loginInfo } = this.props;
    let password = e.target.value;
    loginInfo.password = password;
    this.props.updateLoginInfo(loginInfo);
  }

  handleFullNameBlur(e) {
    let { loginInfo } = this.props;
    let fullName = e.target.value;
    loginInfo.fullName = fullName;
    this.props.updateLoginInfo(loginInfo);
  }

  render() {
    let { mode, loginInfo } = this.props;
    if (mode === "signin") {
      return (
        <div className="login-form-container">
          <form className="login-form">
            <div className="login-form-content">
              <p className="text-center mt-2">
                <img src="../../../../public/assets/img/logo.png" className="img-fluid" alt="" />
              </p>
              <h3 className="login-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" 
                  onClick={(e) => {this.handleSignUpModeClick(e)}}
                >
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  autoComplete="off"
                  defaultValue={loginInfo.email ? loginInfo.email : ''}
                  onChange={(e) => {this.handleEmailBlur(e)}}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  autoComplete="off"
                  defaultValue={loginInfo.password ? '*****' : ''}
                  onChange={(e) => {this.handlePasswordBlur(e)}}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"
                  onClick={(loginInfo) => {this.checkLogin(loginInfo)}}
                >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="login-form-container">
          <form className="login-form">
            <div className="login-form-content">
              <p className="text-center mt-2">
                <img src="../../../../public/assets/img/logo.png" className="img-fluid" alt="" />
              </p>
              <h3 className="login-form-title">Sign In</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" 
                  onClick={(e) => {this.handleSignInModeClick(e)}}
                >
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Lucas Phan"
                  autoComplete="off"
                  defaultValue={loginInfo.fullName ? loginInfo.fullName : ''}
                  onChange={(e) => {this.handleFullNameBlur(e)}}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  autoComplete="off"
                  defaultValue={loginInfo.email ? loginInfo.email : ''}
                  onChange={(e) => {this.handleEmailBlur(e)}}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  autoComplete="off"
                  defaultValue={loginInfo.password ? loginInfo.password : ''}
                  onChange={(e) => {this.handlePasswordBlur(e)}}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"
                  onClick={(loginInfo) => {this.checkSignInClick(loginInfo)}}
                >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )

    }
  }
}

const mapStateToProps = state => {
  const { mode, loginInfo } = state;
  return {
    mode,
    loginInfo
  };
};

export default connect(
  mapStateToProps,
  {
    saveMode,
    updateLoginInfo
  }
)(Login);