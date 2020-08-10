import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";

// Components
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <ProjectState>
        <TaskState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </TaskState>
      </ProjectState>
    </div>
  );
}

export default App;
