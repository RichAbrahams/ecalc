import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import PrintTab from "./components/RecipeResults/PrintTab";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Loadable from "react-loadable";

const LoadableRecipeForm = Loadable({
  loader: () => import("./components/RecipeForm"),
  loading: Loading
});

const LoadableRecipeResults = Loadable({
  loader: () => import("./components/RecipeResults"),
  loading: Loading
});

const LoadableSavedRecipes = Loadable({
  loader: () => import("./components/SavedRecipes"),
  loading: Loading
});

const LoadableTerms = Loadable({
  loader: () => import("./components/Terms"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/printrecipe" component={PrintTab} />
          <Route path="/">
            <Fragment>
              <Banner />
              <Route exact path="/" component={LoadableRecipeForm} />
              <Route path="/reciperesults" component={LoadableRecipeResults} />
              <Route path="/savedrecipes" component={LoadableSavedRecipes} />
              <Route path="/terms" component={LoadableTerms} />
              <Footer />
            </Fragment>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;