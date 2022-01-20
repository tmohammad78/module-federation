import React from "react";
import Auth from "./components/auth";
import Home from "./pages/home";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppPanel from "./components/app";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header>
          <Link to="/auth">Auth React</Link>
          <br />
          <Link to="/app">App vue</Link>
        </header>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={AppPanel} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
