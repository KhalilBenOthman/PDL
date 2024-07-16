import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Projectitemmm extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };
  render() {
    const { project } = this.props;
    return (
      <div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-xl-3 mb-4" style={{ width: "100%" }}>
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-left" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                            <span style={{ fontSize: "18.2px", fontWeight: "bold", textDecoration: "underline" }}>
                              {project.projectIdentifier}
                            </span>
                          </div>
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-left" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                            <span>{project.projectName}</span>
                          </div>
                          <div className="text-dark fw-bold h5 mb-0 text-left" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                            <span>{project.description}</span>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-start">
                            <Link to={`/projectBoard/${project.projectIdentifier}`} className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button">
                              Project Board
                            </Link>
                          </div>
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-start">
                            <Link to={`/updateProject/${project.projectIdentifier}`} className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" style={{ background: "var(--bs-yellow)", borderColor: "var(--bs-yellow)" }}>
                              Update
                            </Link>
                          </div>
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-start">
                            <button onClick={() => this.onDeleteClick(project.projectIdentifier)} className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" style={{ background: "var(--bs-red)", borderColor: "var(--bs-red)" }}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    );
  }
}

Projectitemmm.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default connect(null, { deleteProject })(Projectitemmm);
