import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import history from "./utils/history";
const mount = (el) => {
  ReactDOM.render(<App />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#react-app");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
