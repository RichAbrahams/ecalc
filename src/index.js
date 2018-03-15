import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./reducers/store";
import "regenerator-runtime/runtime";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route } from "react-router-dom";
import withTracker from "./PageTracker";

ReactDOM.render(
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>E-Liquid Wizard</title>
      <meta
        name="description"
        content="Easy E-liquid calculations.  Create, save and print your recipe using our user-friendly wizard."
      />
      <meta
        name="keywords"
        content="eliquid calculator, e-liquid calculator, e-liquid, e-Juice, eliquid, ejuice, calculator, save, print, e-cigarette, vape"
      />
      <meta property="og:title" content="E-Liquid Wizard" />
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
      <Route component={withTracker(App)} />
      </BrowserRouter>
    </Provider>
  </Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
