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
        content="E-liquid, E-Juice, eliquid, ejuice, calculator, save, print, e-cigarette"
      />
      <meta property="og:title" content="E-Liquid Wizard" />
      <meta name="google-site-verification" content="xj270qaRjIgmWouIZDqbSOnmu4WZ2AO1S6isyTgUzLU" />
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
