import React, { useState, useCallback, useEffect } from "react";
import Auth from "./components/auth";
import Home from "./pages/home";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppPanel from "./components/app";
import "./App.css";
import Checkout from "./components/checkout";
import { useData } from "./context/userData";

const history = createBrowserHistory();

function App() {
  const { state, dispatch } = useData();
  const handleNewMessage = useCallback((event) => {
    if (event?.detail) {
      console.log();
      if (event.detail.action === "auth") {
        console.log(event.detail.value);
        dispatch({
          type: "auth",
          data: { ...event.detail.value },
        });
        history.push("/app");
      }
    }
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
        <header className="header">
          <ul className="list">
            <li>
              <Link to="/auth">Auth React</Link>
            </li>
            <li>
              <Link to="/app">App vue</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout svelte</Link>
            </li>
          </ul>
          {state?.auth?.username && (
            <div>Username is: {state?.auth?.username}</div>
          )}
        </header>
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
