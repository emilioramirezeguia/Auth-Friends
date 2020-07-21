import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <h1>Friends</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
