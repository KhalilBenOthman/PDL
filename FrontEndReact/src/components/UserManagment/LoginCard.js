import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'aos/dist/aos.css';
import './assets/css/Login-Animate.css';
import classnames from "classnames";
import AOS from 'aos';
import { login } from "../../actions/securityActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    AOS.init({ duration: 1000, delay: 100, once: true });
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }

    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(loginRequest);
  }

  render() {
    const { errors } = this.state;

    return (
      
      <div
        data-aos="fade-down"
        className="login-card"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <p className="profile-name-card">
          <i
            className="fa fa-unlock-alt d-inline"
            style={{ width: 0, height: 0, fontSize: '56px', color: 'rgb(104,145,162)' }}
          ></i>
        </p>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <span className="reauth-email" style={{ margin: '11px' }}></span>
          <div className="form-group">
          <input
            className={classnames("form-control form-control-lg", {
                "is-invalid": errors.username,
              })}
            type="email"
            id="inputEmail"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            required
            placeholder="Email address"
            autoFocus
          />
          {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
           </div>
                  
           <div className="form-group">
          <input
            className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password,
              })}
            type="password"
            id="inputPassword"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            required
            placeholder="Password"
          />
          {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
          </div>
          <button
            className="btn btn-primary btn-lg d-block btn-signin w-100"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p
          className="text-center"
          style={{ color: 'rgb(73,80,87)', fontSize: '11px' }}
        >
          Restricted Area
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);
