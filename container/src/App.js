import React, { useState, useCallback, useEffect } from "react";
import Auth from "./components/auth";
import Home from "./pages/home";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppPanel from "./components/app";
import "./App.css";
import Checkout from "./components/checkout";

const history = createBrowserHistory();

function App() {
  const [value, setValue] = useState(null);
  const handleNewMessage = useCallback((event) => {
    setValue(event.detail.count);
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleNewMessage);

    return () => {
      window.removeEventListener("message", handleNewMessage);
    };
  }, [handleNewMessage]);
  return (
    <Router history={history}>
      <div className="App">
        {value}
        <header>
          <Link to="/auth">Auth React</Link>
          <br />
          <Link to="/app">App vue</Link>
          <br />
          <Link to="/checkout">Checkout svelte</Link>
        </header>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={AppPanel} />
          <Route path="/auth" component={Auth} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
