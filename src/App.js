import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
