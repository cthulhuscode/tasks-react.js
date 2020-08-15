import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";
import AlertState from "./context/alerts/alertState";
import AuthState from "./context/authentication/authState";

// Components
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

// Higher order component
import PrivateRoute from "./components/routes/PrivateRoute";

// Util token
import authToken from "./config/authToken";

// Check if there is a token
// Add token to the header
const token = localStorage.getItem("token");
if (token) {
  authToken(token);
}

function App() {
  return (
    <div className="App">
      <ProjectState>
        <TaskState>
          <AlertState>
            <AuthState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/new-account" component={NewAccount} />
                  <PrivateRoute exact path="/projects" component={Projects} />
                </Switch>
              </Router>
            </AuthState>
          </AlertState>
        </TaskState>
      </ProjectState>
    </div>
  );
}

export default App;
