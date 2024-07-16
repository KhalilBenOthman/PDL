import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'aos/dist/aos.css';

import './assets/css/Login-Animate.css';
import classnames from "classnames";
import AOS from 'aos';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullname: this.state.fullname,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.createNewUser(newUser, this.props.history);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
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
        <form className="form-signup" onSubmit={this.onSubmit}>
          <span className="reauth-email" style={{ margin: '11px' }}></span>
            <div className="form-group">
             <input className={classnames("form-control form-control-lg", {
                "is-invalid": errors.fullname,
              })}
                    placeholder="full Name"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.onChange}
                  />
                  {errors.fullname && (
                    <div className="invalid-feedback">{errors.fullname}</div>
                  )}
            </div>
            <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Email Address (Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
             </div>
             <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
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

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { createNewUser })(Register);
