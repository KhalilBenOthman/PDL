import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/LandingPage/css/styles.css';
import img from '../assets/LandingPage/img/18770-removebg-preview.png';

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ fontSize: "52.36px", fontWeight: "900", marginTop: "58px" }}>Personal Project Management Tool</h1>
            <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "12px" }}>
              <span style={{ color: "rgb(52, 58, 64)" }}>Create your account to join active projects or start your own</span>
              <br /><br />
            </p>
            <div className="btn-group" role="group">
              <Link to="/Login" className="btn btn-primary">Login</Link>
              <Link to="/Register" className="btn btn-success">Sign Up</Link>
            </div>
            <div style={{ marginTop: "44px" }}></div>
          </div>
          <div className="col-md-6 col-lg-6 offset-lg-0">
            <img src={img} style={{ width: "447px" }} alt="Illustration" />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
