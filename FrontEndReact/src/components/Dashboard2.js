import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/projectActions';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
import Projectitemmm from './Project/Projectitemmm';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/fonts/fontawesome-all.min.css';
import CreateProjectButton2 from './Project/CreateProjectButton2';



class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div id="wrapper" style={{ height: '100%' }}>
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
            <CreateProjectButton2 />
              <div className="row">
                <div className="col-lg-6 mb-4" style={{ width: '100%' }}>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Projects</h6>
                    </div>
                    <div className="card-body">
                    {projects.map((project) => (
                     <Projectitemmm key={project.id} project={project} />
                     ))}
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

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
