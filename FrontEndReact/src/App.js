import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagment/Register";
import Login from "./components/UserManagment/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securituUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securituUtils/SecureRoute";
import Dashboard2 from "./components/Dashboard2";
import Topbar from "./components/Topbar";
import LoginCard from "./components/UserManagment/LoginCard";
import RegisterCard from "./components/UserManagment/RegisterCard";
import Profile from "./components/Profile/Profile";
import Calendar from "./components/Calender/Calender";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>

        <div className="App">

          {
            //Public Routes
          }
          <Route exact path="/" component={Landing} />
          <Route exact path="/Register" component={RegisterCard} />
          <Route exact path="/Login" component={LoginCard} />

          {
            //Private Routes
          }
          <Switch>
            <SecuredRoute exact path="/Profile" component={Profile} /> 
            <SecuredRoute exact path="/Calender" component={Calendar} /> 
            <SecuredRoute exact path="/dashboard" component={Dashboard2} />
            <SecuredRoute exact path="/addProject" component={AddProject} />
            <SecuredRoute
              exact
              path="/updateProject/:id"
              component={UpdateProject}
            />
            <SecuredRoute
              exact
              path="/projectBoard/:id"
              component={ProjectBoard}
            />
            <SecuredRoute
              exact
              path="/addProjectTask/:id"
              component={AddProjectTask}
            />
            <SecuredRoute
              exact
              path="/updateProjectTask/:backlog_id/:pt_id"
              component={UpdateProjectTask}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
