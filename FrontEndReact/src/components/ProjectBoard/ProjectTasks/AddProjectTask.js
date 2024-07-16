import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import Sidebar from '../../sidebar';
import Topbar from '../../Topbar';
import Footer from '../../Footer';
class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: 0,
      dueDate: "",
      projectIdentifier: id,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //on Change

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  //on Submit
  onSubmit(e) {
    e.preventDefault();

    const newTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
    };
    this.props.addProjectTask(
      this.state.projectIdentifier,
      newTask,
      this.props.history
    );
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;

    return (

      <div id="wrapper" style={{ height: '100%' }}>
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Topbar />
          <div className="container-fluid" style={{ height: '100%' }}> 
            <div className="row">
              <div className="col-lg-6 mb-4" style={{ width: '100%' }}>
                <div className="card shadow mb-4">
                <div>




      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/projectBoard/${id}`} className="btn btn-light">
                Back to Project Board
              </Link>
              <h4 className="display-4 text-center">Add Project Task</h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.summary,
                    })}
                    name="summary"
                    placeholder="Project Task summary"
                    value={this.state.summary}
                    onChange={this.onChange}
                  />
                  {errors.summary && (
                    <div className="invalid-feedback">{errors.summary}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6>Due Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dueDate"
                    value={this.state.dueDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.onChange}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
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
    </div>  

    );
  }
}
AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
