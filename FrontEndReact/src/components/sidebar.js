
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/securityActions";

class Sidebar extends Component {
  logout() {
    this.props.logout();  // Supposons que vous avez une fonction logout passée en tant que prop
    window.location.href = "/";  // Redirection vers la page d'accueil après la déconnexion
  }

  render() {
    return (
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{ height: '100%' }}>
        <div className="container-fluid d-flex flex-column p-0">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
            <div className="sidebar-brand-text mx-3"><span>PPMTool</span></div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-tachometer-alt"></i>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </a>
            </li>
            <li className="nav-item">
             
             <Link className="nav-link" to="/Calender">
               Calendar
             </Link>
         </li>
            <li className="nav-item">
             
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
            </li>
            
            <li className="nav-item">
            <Link
              className="nav-link"
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
          </div>
        </div>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Sidebar);

