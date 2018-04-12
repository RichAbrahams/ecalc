import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./reducers/store";
import "regenerator-runtime/runtime";
import { BrowserRouter, Route } from "react-router-dom";
import withTracker from "./PageTracker";

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Route component={withTracker(App)} />
      </BrowserRouter>
    </Provider>
  </Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
