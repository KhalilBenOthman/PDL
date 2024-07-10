import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class Projectitem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    return (
<div className="row">
      <div className="col-lg-6 mb-4" style={{ width: '100%' }}>
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="row align-items-center no-gutters">
              <div className="col me-2">
                <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                  <span style={{ textDecoration: 'underline', textAlign: 'left', fontSize: '13px' }}>
                    Project Code
                  </span>
                </div>
                <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                  <span>Project Name</span>
                </div>
                <div className="text-dark fw-bold h5 mb-0">
                  <span style={{ fontSize: '15px', color: 'rgb(117,120,123)' }}>
                    project Description
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span style={{ textDecoration: 'underline', textAlign: 'left', fontSize: '13px', padding: '27px', margin: '-1px' }}>
                  Date
                </span>
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>










    );
  }
}

Projectitem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(Projectitem);
