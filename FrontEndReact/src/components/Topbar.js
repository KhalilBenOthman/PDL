import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/securityActions";

class Topbar extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.security;

    return (
      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div className="container-fluid">
          <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
            <i className="fas fa-bars"></i>
          </button>
          <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
              <button className="btn btn-primary py-0" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <ul className="navbar-nav flex-nowrap ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="fas fa-user-circle mr-1" />
                {user.fullname}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Topbar.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { Topbar })(Topbar);
