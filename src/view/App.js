import React from "react";
import Auth from "./Auth";
import Home from "./Home";
import Login from "./Login";
import Campaign from "./Campaign";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/campaign/:brand" component={Campaign} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default App