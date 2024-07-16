import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton2 = () => {
  return (
    <div className="d-sm-flex justify-content-between align-items-center mb-4">
      <h3 className="text-dark mb-0">Dashboard</h3>
      <Link to="/addProject" className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button">
        Create Project
      </Link>
    </div>
  );
};

export default CreateProjectButton2;