import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import PrintTab from "./components/RecipeResults/PrintTab";
import Footer from "./components/Footer";
import RecipeForm from './components/RecipeForm';
import RecipeResults from './components/RecipeResults';
import SavedRecipes from './components/SavedRecipes';
import Terms from './components/Terms';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/printrecipe" component={PrintTab} />
          <Route path="/">
            <Fragment>
              <Banner />
              <Route exact path="/" component={RecipeForm} />
              <Route path="/reciperesults" component={RecipeResults} />
              <Route path="/savedrecipes" component={SavedRecipes} />
              <Route path="/terms" component={Terms} />
              <Footer />
            </Fragment>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
