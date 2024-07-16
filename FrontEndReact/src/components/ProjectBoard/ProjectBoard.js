import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";
import Sidebar from '../sidebar';
import Topbar from '../Topbar';
import Footer from '../Footer';

import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/fonts/fontawesome-all.min.css';
class ProjectBoard extends Component {
  //constructer to hundel errors
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;

    const boardAlgorithme = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        //project identifier
        if (errors.projectNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectNotFound}
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectIdentifier}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-center" role="alert">
              No Project Tasks on this Board;
            </div>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };
    BoardContent = boardAlgorithme(errors, project_tasks);

    return (
      <div id="wrapper" style={{ height: '100%' }}>
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
            <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
               <i className="fas fa-plus-circle"> Create Project Task</i>
             </Link>
              <div className="row">
                <div className="col-lg-6 mb-4" style={{ width: '100%' }}>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Project Task</h6>
                    </div>
                    <div className="card-body">
                    {BoardContent}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>




    );
  }
}
ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});
export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
