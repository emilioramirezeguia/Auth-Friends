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
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </div>
        <h1>Sign in to view Friends</h1>
        {/* {window.location.pathname === "/" ? <Login /> : ""} */}
        <Switch>
          {/* <Route component={Login} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
